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

# Left half of source is the Logo badge (Globe + HEPL + Tagline)
$logoRectSrc = New-Object System.Drawing.Rectangle(0, 0, $halfW, $srcH)
# Right half of source is Navy text (HEPL)
$textRectSrc = New-Object System.Drawing.Rectangle($halfW, 0, ($srcW - $halfW), $srcH)

$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$brushNavy = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 18, 40, 95))

# Lower half of ribbon (x = 0 to 1100) is White
# Upper half of ribbon (x = 1100 to 2048) is Navy
$hg.FillRectangle($brushWhite, 0, 0, 1100, 512)
$hg.FillRectangle($brushNavy, 1100, 0, 948, 512)

# 1. Place the Logo Badge in x = 380 to 1050 (width = 670, height = 430)
# This gives a massive 380px white buffer near the hook (x=0..380)
# So the entire Globe + H + EPL is 100% clearly visible in the mid-lower strap!
$logoDst = New-Object System.Drawing.Rectangle(380, 41, 670, 430)
$hg.DrawImage($heplSrc, $logoDst, $logoRectSrc, [System.Drawing.GraphicsUnit]::Pixel)

# 2. Place the Navy HEPL text in x = 1180 to 1880 (width = 700, height = 430)
$textDst = New-Object System.Drawing.Rectangle(1180, 41, 700, 430)
$hg.DrawImage($heplSrc, $textDst, $textRectSrc, [System.Drawing.GraphicsUnit]::Pixel)

$hg.Dispose()
$heplSrc.Dispose()
$brushWhite.Dispose()
$brushNavy.Dispose()

$heplBmp.Save($heplDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$heplBmp.Dispose()
Write-Host "Created centered HEPL lanyard texture: $heplDestPath"


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

# Place the entire Star Logo + Madras MindWorks in x = 420 to 1900 (width = 1480, height = 430)
# This gives a 420px orange gradient buffer near the hook (x=0..420)
# So the entire rainbow star logo sits comfortably in the lower strap, completely clear of the hook!
$mW = $mmwSrc.Width
$mH = $mmwSrc.Height

$mmwDst = New-Object System.Drawing.Rectangle(420, 41, 1480, 430)
$mg.DrawImage($mmwSrc, $mmwDst, 0, 0, $mW, $mH, [System.Drawing.GraphicsUnit]::Pixel)

$mg.Dispose()
$mmwSrc.Dispose()
$mmwBmp.Save($mmwDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$mmwBmp.Dispose()
Write-Host "Created centered MMW lanyard texture: $mmwDestPath"
