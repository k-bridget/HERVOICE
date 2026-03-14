const lessons = {

Puberty: {

en: `
<h2>Puberty</h2>
<p>Puberty is when a child’s body starts changing into an adult body.</p>
<ul>
<li>Body grows taller</li>
<li>Breasts begin to develop for girls</li>
<li>Hair grows under arms and around private areas</li>
<li>Voices may change</li>
<li>Emotional changes happen</li>
</ul>
<p>These changes are natural and happen at different ages.</p>
`,

rw: `
<h2>Ubugimbi n’Ubwangavu</h2>
<p>Ubugimbi n’ubwangavu ni igihe umubiri w’umwana utangira guhinduka ukaba uw’umuntu mukuru.</p>
<ul>
<li>Umubiri urakura ukaba muremure</li>
<li>Amabere atangira gukura ku bakobwa</li>
<li>Imisatsi itangira kumera munsi y’amaboko no mu myanya ndangagitsina</li>
<li>Ijwi rishobora guhinduka</li>
<li>Hari impinduka z’amarangamutima</li>
</ul>
<p>Izi mpinduka zirasanzwe kandi zibaho ku myaka itandukanye.</p>
`

},

Menstruation: {

en: `
<h2>Menstrual Health</h2>
<p>Menstruation is when blood flows from the uterus once every month.</p>
<h3>Menstrual Hygiene</h3>
<ul>
<li>Change pads regularly</li>
<li>Wash hands before and after</li>
<li>Use clean underwear</li>
<li>Dispose pads safely</li>
</ul>
`,

rw: `
<h2>Imihango</h2>
<p>Iminsi y’ukwezi ni igihe amaraso ava mu mura w’umugore buri kwezi.</p>
<h3>Isuku mu gihe cy’imihango</h3>
<ul>
<li>Hindura cotex nyuma yigihe kitarenze amasaha 5</li>
<li>Karaba intoki </li>
<li>Ambara imyenda y’imbere isukuye</li>
<li>Jugunya cotex yakoreshejwe ahabugenewe</li>>
</ul>
`

},

Autonomy: {

en: `
<h2>Body Autonomy</h2>
<p>Your body belongs to you and you have the right to make decisions about it.</p>
<ul>
<li>You can say NO to unwanted touch</li>
<li>No one should force you to do anything</li>
<li>Speak to a trusted adult if something feels wrong</li>
</ul>
`,

rw: `
<h2>Uburenganzira ku Mubiri Wawe</h2>
<p>Umubiri wawe ni uwawe kandi ufite uburenganzira bwo kuwufatira ibyemezo.</p>
<ul>
<li>Ufite uburenganzira bwo kuvuga OYA ku gukorwaho udashaka</li>
<li>Nta muntu ugomba kuguhatira gukora icyo udashaka</li>
<li>Bwira umuntu wizeye niba hari ikintu kitakunejeje</li>
</ul>
`

},

Contraception: {

en: `
<h2>Family Planning & Contraception</h2>
<p>Family planning helps you decide if and when to have children.</p>
<ul>
<li>Condoms protect against pregnancy and STIs</li>
<li>Pills, injectables, and implants are available at health centers</li>
<li>Talk to a health worker to choose what is best for you</li>
</ul>
`,

rw: `
<h2>Kuboneza Urubyaro</h2>
<p>Kuboneza urubyaro bifasha umuntu guhitamo niba ashaka kubyara n’igihe ashaka kubyarira.</p>
<ul>
<li>Agakingirizo karinda inda zitateganyijwe n’indwara zandurira mu mibonano mpuzabitsina</li>
<li>Ibinini, inshinge n’utundi dukoresho biboneka ku bigo nderabuzima</li>
<li>Ganira n’umukozi w’ubuzima agufashe guhitamo ikubereye</li>
</ul>
`

},

STIs: {

en: `
<h2>Preventing STIs & HIV</h2>
<p>STIs and HIV can affect anyone who is sexually active.</p>
<ul>
<li>Use condoms to reduce risk</li>
<li>Get tested regularly at your local clinic</li>
<li>Seek treatment if you notice symptoms</li>
<li>HIV positive mothers can prevent transmission to babies with proper care</li>
</ul>
`,

rw: `
<h2>Kwirinda Indwara zandurira mu Mibonano Mpuzabitsina na sida</h2>
<p>Izi ndwara zishobora kwibasira umuntu wese ukora imibonano mpuzabitsina.</p>
<ul>
<li>Koresha agakingirizo kugira ngo ugabanye ibyago</li>
<li>Jya kwisuzumisha kwa muganga kenshi</li>
<li>Shaka ubuvuzi niba ubonye ibimenyetso</li>
<li>Ababyeyi bafite sida bashobora kwirind kutayanduza abana binyuze mu buvuzi</li>
</ul>
`

},

SEX_EDUCATION: {

en: `
<h2>Safe Relationships for Adolescents</h2>
<p>Learning about safe relationships helps you protect your body and feelings.</p>
<ul>
<li>Understand consent: Only say YES when you want to</li>
<li>Peer pressure is normal, but you can say NO</li>
<li>Early marriage can harm your health and education</li>
<li>Talk to elders or mentors about difficult choices</li>
</ul>
`,

rw: `
<h2>Imibanire Myiza</h2>
<p>Kumenya imibanire myiza bifasha kurinda umubiri wawe n’amarangamutima yawe.</p>
<ul>
<li>Sobanukirwa uburenganzira bwawe</li>
<li>Ushobora kuvuga OYA ku gitutu cy’abandi</li>
<li>Gushyingirwa hakiri kare bishobora kwangiza ubuzima n’amashuri</li>
<li>Ganira n’abakuru cyangwa abajyanama</li>
</ul>
`

},

GBV: {

en: `
<h2>Gender-Based Violence (GBV)</h2>
<p>GBV is never acceptable and help is available.</p>
<ul>
<li>Types: physical, sexual, emotional abuse</li>
<li>Know your rights; you are protected by law</li>
<li>Seek help from local authorities or support organizations</li>
<li>Helplines are available for immediate support</li>
</ul>
`,

rw: `
<h2>Ihohoterwa Rishingiye ku Gitsina</h2>
<p>Ihohoterwa ntiryemewe kandi ubufasha burahari.</p>
<ul>
<li>Rishobora kuba iry’umubiri, iry’igitsina cyangwa iry’amarangamutima</li>
<li>Menya uburenganzira bwawe; amategeko arakurengera</li>
<li>Shaka ubufasha ku buyobozi cyangwa imiryango ifasha</li>
<li>Hari nimero zihari zo gutabarwa vuba</li>
</ul>
`

},

rights: {

en: `
<h2>Your Sexual & Reproductive Rights</h2>
<p>Everyone has the right to make decisions about their own body.</p>
<ul>
<li>You have the right to education and information</li>
<li>You have the right to access health services</li>
<li>Speak up if someone tries to take away your choices</li>
<li>Support others to know their rights too</li>
</ul>
`,

rw: `
<h2>Uburenganzira bwawe ku Buzima bw’Imyororokere</h2>
<p>Buri muntu afite uburenganzira bwo gufata ibyemezo ku mubiri we.</p>
<ul>
<li>Ufite uburenganzira bwo kubona uburezi n’amakuru</li>
<li>Ufite uburenganzira bwo kubona serivisi z’ubuzima</li>
<li>Vuga niba hari ushaka kukwambura uburenganzira bwawe</li>
<li>Fasha n’abandi kumenya uburenganzira bwabo</li>
</ul>
`

}

};