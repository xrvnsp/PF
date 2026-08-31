Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788161047433.png'
$outPath = 'c:\Users\901969\Documents\SP Portfolio\assets\hepl_lanyard.png'

$srcImg = [System.Drawing.Image]::FromFile($srcPath)

# Upscale to crisp 2048x512 texture
$bmp = New-Object System.Drawing.Bitmap(2048, 512)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.DrawImage($srcImg, 0, 0, 2048, 512)

$g.Dispose()
$srcImg.Dispose()

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Created ultra-res 2048x512 lanyard texture: $outPath"
