// Store the complete email template with placeholders
const emailTemplateBase = `<!--
  templateType: "email"
  isAvailableForNewContent: true
-->
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Episode List Email</title>
  <style type="text/css">
    /* Reset styles */
    body,
    table,
    td,
    p,
    a,
    li,
    blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    body {
      margin: 0 auto;
      padding: 0;
      font-family: "museo-sans", sans-serif;
      width: 100% !important;
      max-width: 600px;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      width: 100%;
      max-width: 600px;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      max-width: 600px;
      width: 100%;
    }

    /* Main styles */
    .main-container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #364FA1;
      color: #ffffff;
    }

    /* Header styles */
    .header {
      padding: 5px 20px 30px;
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      max-width: 600px;
      text-transform: uppercase;
    }

    .header-bg {
      background-image: url('https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/Header.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    /* Episode styles */
    .episode-container {
      padding: 20px;
      width: 100%;
      max-width: 600px;
    }

    .episode-image {
      width: 100%;
      max-width: 600px;
      height: auto;
      display: block;
    }

    .this-episode-image {
      width: 100%;
      max-width: 600px;
      height: auto;
      display: block;
      padding: 0px 20px;
      box-sizing: border-box;
    }

    .episode-info {
      padding: 8px 20px;
      background-repeat: no-repeat;
      background-size: cover;
      height: 142px;
      border-radius: 5px;
    }

    .more-episode-info {
      padding: 8px 20px;
      background-repeat: no-repeat;
      background-size: cover;
      height: 142px;
      border-radius: 5px;
      box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.35);
      background-position: center;
    }

    .episode-date {
      font-size: 14px;
      padding-bottom: 5px;
    }

    .episode-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      line-height: 110%;
    }

    .episode-description {
      font-size: 14px;
      line-height: 130%;
      color: #CDD3E7;
      width: 100%;
      max-width: 560px;
    }

    .episode-arrow {
      vertical-align: middle;
      font-size: 24px;
      font-weight: bold;
      text-align: right;
    }

    /* Divider styles */
    .divider {
      height: 50px;
    }

    .divider td {
      padding: 20px;
    }

    .divider hr {
      border: none;
      border-top: 2px solid #49C1BA;
    }

    /* Host profile styles */
    .host-container {
      color: white;
    }

    .host-profile {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      overflow: hidden;
      min-height: 290px;
      height: auto;
      place-content: center;
    }

    .host-image {
      display: inline-block;
      vertical-align: top;
    }

    .host-image img {
      width: 245px;
      height: 265px;
      display: block;
      object-fit: cover;
      border-radius: 10px;
    }

    .host-info {
      display: inline-flex;
      width: 48%;
      padding-left: 5%;
      align-items: center;
      height: 265px;
    }

    .host-name {
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 5px;
    }

    .host-title {
      font-size: 14px;
      padding-bottom: 25px;
    }

    .host-bio {
      font-size: 14px;
      line-height: 1.4;
    }

    /* Hero section styles */
    .mm-hero {
      margin-top: -132px;
      position: relative;
    }

    .mm-hero-title {
      font-size: 24px;
      color: white;
    }

    .mm-hero-date {
      font-size: 14px;
      margin-bottom: 5px;
      color: white;
    }

    .mm-bottom-logo {
      max-width: 398px;
      width: 100%;
    }

    /* Button styles */
    .button-container {
      padding: 30px 20px 40px;
      text-align: center;
    }

    .view-button,
    .learn-more-btn {
      width: 185px;
      display: inline-block;
      border: 1px solid #F7941D;
      color: white;
      text-decoration: none;
      padding: 12px 30px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .learn-more-btn {
      background-color: rgba(54, 79, 161, 0.3);
    }

    #mm-thumbnail {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    /* Platform styles */
    .platform-container {
      background-color: #193966;
      color: white;
    }

    /* Footer styles */
    .hse-footer {
      font-family: Arial, sans-serif;
      font-size: 12px;
      line-height: 135%;
      color: #23496d;
      margin-bottom: 0;
      padding: 0;
    }

    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .main-container {
        width: 100% !important;
      }

      .episode-info {
        background-position: center;
      }

      .episode-date {
        font-size: 12px;
      }

      .episode-title {
        font-size: 18px;
      }

      .mm-hero {
        margin-top: -110px;
      }

      .mm-hero-date {
        font-size: 12px;
      }

      .host-info {
        width: 100%;
        padding-left: 0%;
        height: 200px;
      }

      .host-profile {
        margin-bottom: 5px;
      }
    }

    @media screen and (max-width: 480px) {
      .mobile-stack {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        padding: 8px 0 !important;
      }

      .view-button {
        width: 80% !important;
        max-width: 280px !important;
        display: block !important;
      }

      .button-row td {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 0 10px 0 !important;
      }

      .button-row td:last-child {
        padding-bottom: 0 !important;
      }

      .button-row img {
        width: 80% !important;
        height: auto !important;
        max-width: 200px !important;
        margin: 0 auto !important;
      }

      .host-profile {
        height: 545px;
      }

      .host-info {
        width: 100%;
        padding-left: 0%;
        height: 265px;
      }

      #mm-thumbnail {
        background-position: center;
      }
    }
  </style>
  <link rel="stylesheet" href="https://use.typekit.net/pzi7pdy.css">
  {{ dnd_area_stylesheet }} <!-- Required tag for drag and drop compatibility -->
</head>

<body>
  <div id="preview_text"
    style="display:none;font-size:1px;color:{{background_color}};line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    {% text "preview_text" label="Preview Text", value="", no_wrapper=True %}</div>
  <table class="main-container" width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
    <tr>
      <td align="center">
        <!-- Main content table -->
        <table cellpadding="0" cellspacing="0" border="0" width="600" class="alert-container">
          <tr>
            <td class="header-bg">
              <!-- Logo area -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>

                  <td style="padding: 30px;">
                    <a href="https://www.snapshotinteractive.com/mastermined">
                      <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/mm_logo.png"
                        alt="MASTER MINED" class="logo" style="max-width: 160px;">
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Alert text area -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding: 30px;line-height: 36px;">
                    <div class="new-episode"
                      style="font-size: 40px; font-weight: 100; color: white; text-transform: uppercase;">
                      new episode
                    </div>
                    <div class="alert"
                      style="font-size: 40px; font-weight: bold; text-transform: uppercase; color: white;">
                      alert
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center">
        <!-- Main content table -->
        <table cellpadding="0" cellspacing="0" border="0" width="600" class="episode-container"
          style="background-color: #000000; color: white;">
          <tr>
            <td id="mm-thumbnail"
              background="{{NEW_EPISODE_THUMBNAIL}}"
              bgcolor="#000000" width="600" valign="bottom"
              style="background-image: url( {{NEW_EPISODE_THUMBNAIL}} );">
              <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">
                    <v:fill type="tile" src="{{NEW_EPISODE_THUMBNAIL}}" color="#000000" id="mm-thumbnail" />
                    <v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true;">
                    <![endif]-->

              <!-- Episode image for non-Outlook clients that need fixed height -->
              <!--[if !mso]><!-->
              <div style="height: 265px;"></div>
              <!--<![endif]-->

              <!-- Episode title overlay -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(0,0,0,0.7);">
                <tr>
                  <td style="padding: 20px;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td class="mm-hero-title">
                          <div class="mm-hero-date">
                            <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/calendar.png"
                              alt="Calendar Icon"
                              style="vertical-align:baseline;margin-top:5px;margin-right:5px;height:12px;width:12px !important;">
                            {{NEW_EPISODE_RELEASE_DATE}}
                            <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/timer.png"
                              alt="Time Icon"
                              style="vertical-align:baseline;margin-top:5px;margin-left:10px; margin-right:5px;height:12px;width:12px !important;">
                            {{NEW_EPISODE_DURATION}}
                          </div>
                          {{NEW_EPISODE_TITLE}}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!--[if gte mso 9]>
                    </v:textbox>
                    </v:rect>
                    <![endif]-->
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center">
        <!-- Main content table -->
        <table cellpadding="0" cellspacing="0" border="0" width="600" class="episode-container"
          style="background-color: #193966; color: white;">
          <!-- Episode description -->
          <tr>
            <td class="episode-description" style="font-size: 16px; line-height: 150%; padding: 30px 20px 5px 20px;">
              <p>{{NEW_EPISODE_DESCRIPTION}}</p>
              <p>{{NEW_EPISODE_DESCRIPTION_SECOND_PARAGRAPH}}</p>
          </tr>

          <!-- View episode button -->
          <tr>
            <td class="button-container">
              <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                <tr>
                  <td class="mobile-stack" align="center" style="padding: 0 10px;">
                    <a href="{{NEW_EPISODE_WEBSITE_LINK}}"
                      class="view-button">
                      go to episode <img style="height:auto;width:13px;"
                        src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/arrow-right.png" />
                    </a>
                  </td>
                  <td class="mobile-stack" align="center" style="padding: 0 10px;">
                    <a href="{{NEW_EPISODE_YOUTUBE_LINK}}" class="view-button">
                      watch on youtube <img style="height:auto;width:13px;"
                        src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/arrow-right.png" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/divider.png" alt="Divider"
          style="width: 100%; display: block;">
      </td>
    </tr>
    <tr class="mm-hosts-vert">
      <td align="center">
        <!-- Main content table -->
        <table cellpadding="0" cellspacing="0" border="0" width="600" class="host-container">
          <tr>
            <td style="padding: 20px;">
              <!-- Header -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="header" style="font-size: 20px; font-weight: bold; padding: 10px 0 20px 0;">
                    ABOUT THE HOSTS
                  </td>
                </tr>
              </table>

              {{HOST_PROFILES}}

            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr class="divider">
      <td>
        <hr />
      </td>
    </tr>
    <tr>
      <td class="header">
        MORE EPISODES
      </td>
    </tr>

    {{PREVIOUS_EPISODES}}

    <tr>
      <td align="center">
        <!-- Main content table -->
        <table cellpadding="0" cellspacing="0" border="0" width="600" class="header-container">
          <!-- Main background image row -->
          <tr>
            <td background="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/cta-bg.png" bgcolor="#364FA1"
              width="600" height="300" valign="middle"
              style="background-image: url(https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/cta-bg.png); background-position: center center; background-repeat: no-repeat; background-size: cover;">
              <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:300px;">
                    <v:fill type="tile" src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/cta-bg.png" color="#364FA1" />
                    <v:textbox inset="0,0,0,0">
                    <![endif]-->

              <!-- Center-aligned content table -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%" height="300">
                <tr>
                  <td align="center" valign="middle" style="padding: 20px;">
                    <!-- Brand container -->
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td align="center">
                          <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/mm_bottom_logo.png"
                            alt="MASTERMINED" class="mm-bottom-logo">
                        </td>
                      </tr>
                    </table>

                    <!-- Learn More button -->
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px;">
                      <tr>
                        <td align="center" style="text-align:center;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <a href="https://www.snapshotinteractive.com/mastermined" class="learn-more-btn">
                                  LEARN MORE <img style="height:auto;width:13px;"
                                    src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/arrow-right.png" />
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!--[if gte mso 9]>
                    </v:textbox>
                    </v:rect>
                    <![endif]-->
            </td>
          </tr>
        </table>
      </td>
    </tr>
    </tr>
    <td align="center">
      <!-- Main content table -->
      <table cellpadding="0" cellspacing="0" border="0" width="600" class="platform-container">
        <tr>
          <td style="padding: 40px 20px 60px;">
            <!-- Heading -->
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 20px;">
              <tr>
                <td align="center"
                  style="font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                  LISTEN ON YOUR PREFERRED PLATFORM
                </td>
              </tr>
            </table>

            <!-- Platform buttons with mobile stacking - centered -->
            <table cellpadding="0" cellspacing="0" border="0" width="100%" class="button-container">
              <tr>
                <!-- Center alignment wrapper -->
                <td align="center">
                  <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                    <tr class="button-row">
                      <!-- Apple Podcasts Button -->
                      <td align="center" style="padding: 0 5px;">
                        <a href="https://podcasts.apple.com/us/podcast/masterminded/id1815365042" target="_blank">
                          <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/mm_apple.png"
                            alt="Apple Podcasts" width="150" height="40"
                            style="display: block; border-radius: 5px; max-width: 100%;">
                        </a>
                      </td>

                      <!-- Spotify Button -->
                      <td align="center" style="padding: 0 5px;">
                        <a href="https://open.spotify.com/show/6A2eZb2CMeGFzFRg0vj4aN" target="_blank">
                          <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/mm_spotify.png"
                            alt="Spotify" width="150" height="40"
                            style="display: block; border-radius: 5px; max-width: 100%;">
                        </a>
                      </td>

                      <!-- YouTube Button -->
                      <td align="center" style="padding: 0 5px;">
                        <a href="https://www.youtube.com/@MasterMinedPodcast" target="_blank">
                          <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/mm_youtube.png"
                            alt="YouTube" width="150" height="40"
                            style="display: block; border-radius: 5px; max-width: 100%;">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    </tr>
  </table>
  <table role="presentation" class="hse-footer hse-secondary" width="100%" cellpadding="0" cellspacing="0"
    style="font-family:Arial, sans-serif; font-size:12px; line-height:135%; color:#23496d; margin-bottom:0; padding:0">
    <tbody>
      <tr>
        <td align="center" valign="top"
          style="font-family:Arial, sans-serif; font-size:15px; color:#23496d; word-break:break-word; text-align:center; margin-bottom:0; line-height:135%; padding:10px 20px">
          <p
            style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;text-decoration:none;font-style:normal;color:#23496d;margin-bottom:0;">
            {{ site_settings.company_name }}, {{ site_settings.company_street_address_1 }}, {{
            site_settings.company_city }}, {{ site_settings.company_state }} 37206, United States,
            615.810.9855
          </p>
          <p style="margin-top:0;">
            <a data-unsubscribe="true" href="{{ unsubscribe_link }}"
              style="font-family:Helvetica,Arial,sans-serif; font-size:12px; color:#00a4bd; font-weight:normal; text-decoration:underline; font-style:normal"
              data-hs-link-id="0" data-hs-link-id-v2="AF6iJQqE" target="_blank">Unsubscribe</a>
            <a data-unsubscribe="true"
              href="https://marketing.snapshotinteractive.com/hs/preferences-center/en/page?data=W2nXS-N30h-MxW3XLSfM3DL576W4mmxrm2p0nXSW1_cSJv3bhMdDW3861fK1VcDKXW3H4qVX3NVlQkW49Nrcg1W-XgmW2nN_Jn1X8XlVW3bdXLG3dfvsNW4ffYLQ235Bq3W2nRrKG34CJSkW4mH8Vr49KSxLW3yWGyZ2Yr56QW4hrj1Z49HP74W3V-ZGZ2502cyW3_MHK12TQqF3W1Qs-pG2MWDdCW2s_Bxf3SzP14W3_Lry03zbTXTW3_R4xQ1NmJmyW1Vkrcj3S__HCW47B7YK3QM3Y4W3b2tf42WNxwcW2MwTzG2CP1blW43YlxL3SP10VW2-F55h3JPm2XW22TJfj3CcslHW2nWD4T3ZCFqRW3NFYl44tCFlJW1Xmp9C4cQcPpW2w4rcY1Vhm9TW2p1KyW47QJPhW3BPcxC2xZWQMW2vY7jL3_Ct5V0&amp;utm_source=hs_email&amp;utm_medium=email&amp;_hsenc=p2ANqtz-_WZAnD7DmKRlwuxB9pRQH_Df_DhDX6k4EiVeytOY_UtQqnYk34Ao2Lz3RrBdEzGuLscWJL"
              style="font-family:Helvetica,Arial,sans-serif; font-size:12px; color:#00a4bd; font-weight:normal; text-decoration:underline; font-style:normal"
              data-hs-link-id="0" data-hs-link-id-v2="Ps6zLzpM" target="_blank">Manage preferences</a>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>`;