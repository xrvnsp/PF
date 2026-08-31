Add-Type -AssemblyName System.Drawing

# ==============================================================================
# 1. Digifox / HEPL Lanyard Texture (2048 x 512)
# ==============================================================================
$heplSrcPath = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788161047433.png'
$heplDestPath = 'c:\Users\901969\Documents\SP Portfolio\assets\hepl_lanyard.png'

$heplSrc = [System.Drawing.Image]::FromFile($heplSrcPath)
$heplBmp = New-Object System.Drawing.Bitmap(2048, 512)
$hg = [System.Drawing.Graphics]::FromImage($heplBmp)
$hg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$hg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$hg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$srcW = $heplSrc.Width
$srcH = $heplSrc.Height
$halfW = [int]($srcW / 2)

# Left half (white bg with logo)
$logoRectSrc = New-Object System.Drawing.Rectangle(0, 0, $halfW, $srcH)
# Right half (navy bg with HEPL text)
$textRectSrc = New-Object System.Drawing.Rectangle($halfW, 0, ($srcW - $halfW), $srcH)

$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$brushNavy = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 18, 40, 95))

# Fill backgrounds: White from 0 to 1024, Navy from 1024 to 2048
$hg.FillRectangle($brushWhite, 0, 0, 1024, 512)
$hg.FillRectangle($brushNavy, 1024, 0, 1024, 512)

# Position Logo with 200px margin from the hook edge (x=0)
# So at x=0..200 it is pure white strap entering the hook
# The entire globe + HEPL + tagline is drawn in x=220..980 (width=760, height=440)
# This guarantees that at normal rest, the globe and H are 100% visible well above the hook!
$logoDst = New-Object System.Drawing.Rectangle(220, 36, 760, 440)
$hg.DrawImage($heplSrc, $logoDst, $logoRectSrc, [System.Drawing.GraphicsUnit]::Pixel)

# Position Navy HEPL text nicely centered in x=1120..1920 (width=800, height=440)
$textDst = New-Object System.Drawing.Rectangle(1120, 36, 800, 440)
$hg.DrawImage($heplSrc, $textDst, $textRectSrc, [System.Drawing.GraphicsUnit]::Pixel)

$hg.Dispose()
$heplSrc.Dispose()
$brushWhite.Dispose()
$brushNavy.Dispose()

$heplBmp.Save($heplDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$heplBmp.Dispose()
Write-Host "Created HEPL texture with hook clearance: $heplDestPath"


# ==============================================================================
# 2. Madras MindWorks Lanyard Texture (2048 x 512)
# ==============================================================================
$mmwSrcPath = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788171439056.png'
$mmwDestPath = 'c:\Users\901969\Documents\SP Portfolio\assets\mmw_lanyard.png'

$mmwSrc = [System.Drawing.Image]::FromFile($mmwSrcPath)
$mmwBmp = New-Object System.Drawing.Bitmap(2048, 512)
$mg = [System.Drawing.Graphics]::FromImage($mmwBmp)
$mg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$mg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$mg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Vibrant orange-yellow gradient background across full 2048x512
$gradRect = New-Object System.Drawing.Rectangle(0, 0, 2048, 512)
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $gradRect,
    [System.Drawing.Color]::FromArgb(255, 255, 65, 5),
    [System.Drawing.Color]::FromArgb(255, 255, 195, 10),
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$mg.FillRectangle($gradBrush, $gradRect)
$gradBrush.Dispose()

# Original MMW image has: Star Logo on left, Madras MindWorks text on right
# We want the Star Logo to have 220px margin from hook (x=0)
# So at x=0..220 it's orange strap entering the hook
# Star Logo + Text is positioned in x=220..1920 (width=1700, height=430)
$mW = $mmwSrc.Width
$mH = $mmwSrc.Height

$mmwDst = New-Object System.Drawing.Rectangle(240, 41, 1680, 430)
$mg.DrawImage($mmwSrc, $mmwDst, 0, 0, $mW, $mH, [System.Drawing.GraphicsUnit]::Pixel)

$mg.Dispose()
$mmwSrc.Dispose()
$mmwBmp.Save($mmwDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$mmwBmp.Dispose()
Write-Host "Created MMW texture with hook clearance: $mmwDestPath"
