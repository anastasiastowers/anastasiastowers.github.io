// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "2y2IM2I12.P.IMbmnRI@Cu21z.jbu"
  key = "ehBm91apFb7EGUQrMDs30g5JlqPWjnN8udX2wKiTxOofRHAIVtCZvz4YSLyk6c"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
$('.email-icon').html('<a href="mailto:'+link+'"><i class="fa fa-envelope"></i></a>');
$('.email').html('<a href="mailto:'+link+'">email</a>');
}