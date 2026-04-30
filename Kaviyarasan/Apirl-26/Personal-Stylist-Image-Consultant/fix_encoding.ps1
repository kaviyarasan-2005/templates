param()
Set-StrictMode -Off

$folder = "pages"
$files  = Get-ChildItem -Path $folder -Filter "*.html"

# Build replacement pairs using char codes to avoid encoding issues in this script
# These are the Latin-1 supplement byte sequences that appear when UTF-8 is
# mis-interpreted as Latin-1 and then re-encoded
$pairs = @(
    # en-dash U+2013  ->  UTF-8: 0xE2 0x80 0x93
    @([string][char]226 + [char]128 + [char]147, "-")
    # em-dash U+2014  ->  UTF-8: 0xE2 0x80 0x94
    @([string][char]226 + [char]128 + [char]148, "-")
    # RIGHT SINGLE QUOTATION MARK U+2019  -> 0xE2 0x80 0x99
    @([string][char]226 + [char]128 + [char]153, "'")
    # LEFT DOUBLE QUOTATION MARK U+201C   -> 0xE2 0x80 0x9C
    @([string][char]226 + [char]128 + [char]156, '"')
    # RIGHT DOUBLE QUOTATION MARK U+201D  -> 0xE2 0x80 0x9D
    @([string][char]226 + [char]128 + [char]157, '"')
    # BULLET U+2022  -> 0xE2 0x80 0xA2
    @([string][char]226 + [char]128 + [char]162, "-")
    # HORIZONTAL ELLIPSIS U+2026  -> 0xE2 0x80 0xA6
    @([string][char]226 + [char]128 + [char]166, "...")
    # U+00C9 LATIN CAPITAL LETTER E WITH ACUTE  -> 0xC3 0x89
    @([string][char]195 + [char]137, "E")
    # U+00E9 LATIN SMALL LETTER E WITH ACUTE    -> 0xC3 0xA9
    @([string][char]195 + [char]169, "e")
)

$enc = New-Object System.Text.UTF8Encoding($false)  # no BOM

foreach ($file in $files) {
    $bytes   = [System.IO.File]::ReadAllBytes($file.FullName)
    $content = [System.Text.Encoding]::UTF8.GetString($bytes)
    $orig    = $content

    foreach ($pair in $pairs) {
        $content = $content.Replace($pair[0], $pair[1])
    }

    if ($content -ne $orig) {
        [System.IO.File]::WriteAllText($file.FullName, $content, $enc)
        Write-Host "Fixed: $($file.Name)"
    } else {
        Write-Host "Clean: $($file.Name)"
    }
}

Write-Host ""
Write-Host "All done."
