<h1>One World</h1>
<h3>First Milestone Project: User-Centric Frontend Development - Code Institute</h3>
<h4>By Lewis Hamilton</h4>
<hr>
<p>This is a website that introduces you to seven critical species covering useful infomation on each, including a small biography of each species, the causes of their demise, what the organisation is doing to help and what the user can do to help also.</p>
<br>
<h3>Demo</h3>
<p>A live demo can be found here <a href="https://lewejuice.github.io/oneworld/" rel="nofollow" target="_blank">here</a>.</p>
<a target="_blank" rel="noopener noreferrer" href="#"><img src="https://media.giphy.com/media/QzB1q3dQycEPFj1jqT/giphy.gif" alt="Desktop Demo" title="Desktop Demo" style="max-width:100%;"></a>
<br>
<h3>UX</h3>
<hr>
<h4>User Stories</h4>
<p>As a user that would like to donate money to a certain animals cause, I need to be able to eaily find that species and it's donation page.</p>
<img src="one-world/assets/images/donate.png">
<br>
<p>As a user that wants to find out some infomation about a species but only has a mobile phone to research it, I need to be able to navigate the site easily to locate my animal and read through detailed infomation all on a small screen.</p>
<img src="one-world/assets/images/phone-sc.png">
<br>
<h4>Strategy</h4>
<p>My design goal was to make it as easy as possible to navigate the website and also read detailed imfomation but in an uncluttered space.</p>
<br>
<h4>Scope</h4>
<p>For my users, I wanted to give them the passion, knowledge and motivation to help endangered species accross the world. This way they could obtain crutial infomation and feel they can make a difference.</p>
<br>
<h4>Structure</h4>
<p>I have used a suquential structure in my site to help the user navigate the site in a clear and simple way and help them access the imfomation they're looking for. I achieved this by creating a simple navbar and holding all infomation on one single page that they can either scroll through or jump straight to one part that they desire.</p>
<br>
<h4>Skeleton</h4>
<p><a href="https://github.com/lewejuice/oneworld/blob/master/navbar.md">Navbar wireframe</a></p>
<p><a href="https://github.com/lewejuice/oneworld/blob/master/title.md">Title wireframe</a></p>
<p><a href="https://github.com/lewejuice/oneworld/blob/master/intro.md">Introduction wireframe</a></p>
<p><a href="https://github.com/lewejuice/oneworld/blob/master/animal.md">Animal wireframe</a></p>
<p><a href="https://github.com/lewejuice/oneworld/blob/master/social.md">Social wireframe</a></p>
<br>
<h4>Surface</h4>
<p>I chose a colour scheme to match the colour of the animals to help the user to be able to scroll through and locate an animal by the colour of the section. I used a dark grey background to help all the colours stand out.</p>
<br>
<h3>Technologies</h3>
<hr>
<ol>
<li>HTML</li>
<li>CSS</li>
<li>JAVA SCRIPT</li>
<li>JQUERY</li>
<li>BOOTSTRAP</li>
<li>ADOBE CREATIVE SOFTWARE</li>
</ol>
<br>
<h3>Features</h3>
<hr>
<p>I have used animal icons in my navbar that grow larger and change colour when you hover over them using CSS. When the screen size shrinks I have the navbar collapses into a burger icon with a dropdown list of the animal names to make it more visable and clean on a smaller screen. The pargraphs are in scrolling text boxes on larger screens and have 'read more' buttons on smaller screens to neatly fit in large pargraphs of text. I have also added a 'back to top' button at the bottom of the page to help the user get back to top with ease, which also has inverted effect when hovered over. I have achived these fatures using CSS, Bootstrap, Java Script and jQuery.</p>
<h4>Features Left to Implement</h4>
<p>In the future I would like to add more content to the animal paragraphs and also a cleaner scrolling effect.</p>
<br>
<h3>Testing</h3>
<hr>
<p>The user stories successfully achieved the intended outcome by firstly drawing them in with an inspirational 
logo and slogan, then followed by an eye capturing hero image. Secondly providing them a clear easy to use navbar to find the infomation they desire. All links provided will open in a new tab using 'target="_blank"' so the user wont loose the orignal site.</p> 
<br>
<p>Here our my methods of testing.</p>
Devices        | Browsers        | Errors                                      | Fixed
-------------- | :-------------: | ----------------------------------------: | ---------------------------------------------------:
Imac           | Chrome          | Was too spread out over a large screen      | Used padding on the body for larger screens only
iPad           | Mozzilla        | See through navbar background confused user | Changed to solid colour matching the body 
Macbook        | Safari          | Icons blur when hovered over                | No 
Lenovo tablet  | Explorer        | None                                        | N/A 
iPhone 11 pro  | Safari          | Back to top button blocking content.        | Instead of being fixed, it now stays in place 
Samsung galaxy | Samsung broswer | None                                        | N/A 
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>global.imagePullSecrets</code></td>
<td>Reference to one or more secrets to be used when pulling images</td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>image.repository</code></td>
<td>Image repository</td>
<td><code>quay.io/jetstack/cert-manager-controller</code></td>
</tr>
<tr>
<td><code>image.tag</code></td>
<td>Image tag</td>
<td><code>v0.6.2</code></td>
</tr>
<tr>
<td><code>image.pullPolicy</code></td>
<td>Image pull policy</td>
<td><code>IfNotPresent</code></td>
</tr>
<tr>
<td><code>replicaCount</code></td>
<td>Number of cert-manager replicas</td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>clusterResourceNamespace</code></td>
<td>Override the namespace used to store DNS provider credentials etc. for ClusterIssuer resources</td>
<td>Same namespace as cert-manager pod</td>
</tr>
<tr>
<td><code>leaderElection.Namespace</code></td>
<td>Override the namespace used to store the ConfigMap for leader election</td>
<td>Same namespace as cert-manager pod</td>
</tr>
<tr>
<td><code>extraArgs</code></td>
<td>Optional flags for cert-manager</td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>extraEnv</code></td>
<td>Optional environment variables for cert-manager</td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>rbac.create</code></td>
<td>If <code>true</code>, create and use RBAC resources</td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>serviceAccount.create</code></td>
<td>If <code>true</code>, create a new service account</td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>serviceAccount.name</code></td>
<td>Service account to be used. If not set and <code>serviceAccount.create</code> is <code>true</code>, a name is generated using the fullname template</td>
<td></td>
</tr>
<tr>
<td><code>resources</code></td>
<td>CPU/memory resource requests/limits</td>
<td></td>
</tr>
<tr>
<td><code>securityContext.enabled</code></td>
<td>Enable security context</td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>securityContext.fsGroup</code></td>
<td>Group ID for the container</td>
<td><code>1001</code></td>
</tr>
<tr>
<td><code>securityContext.runAsUser</code></td>
<td>User ID for the container</td>
<td><code>1001</code></td>
</tr>
<tr>
<td><code>nodeSelector</code></td>
<td>Node labels for pod assignment</td>
<td><code>{}</code></td>
</tr>
<tr>
<td><code>affinity</code></td>
<td>Node affinity for pod assignment</td>
<td><code>{}</code></td>
</tr>
<tr>
<td><code>tolerations</code></td>
<td>Node tolerations for pod assignment</td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>ingressShim.defaultIssuerName</code></td>
<td>Optional default issuer to use for ingress resources</td>
<td></td>
</tr>
<tr>
<td><code>ingressShim.defaultIssuerKind</code></td>
<td>Optional default issuer kind to use for ingress resources</td>
<td></td>
</tr>
<tr>
<td><code>ingressShim.defaultACMEChallengeType</code></td>
<td>Optional default challenge type to use for ingresses using ACME issuers</td>
<td></td>
</tr>
<tr>
<td><code>ingressShim.defaultACMEDNS01ChallengeProvider</code></td>
<td>Optional default DNS01 challenge provider to use for ingresses using ACME issuers with DNS01</td>
<td></td>
</tr>
<tr>
<td><code>podAnnotations</code></td>
<td>Annotations to add to the cert-manager pod</td>
<td><code>{}</code></td>
</tr>
<tr>
<td><code>podDnsPolicy</code></td>
<td>Optional cert-manager pod <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pods-dns-policy" rel="nofollow">DNS policy</a></td>
<td></td>
</tr>
<tr>
<td><code>podDnsConfig</code></td>
<td>Optional cert-manager pod <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pods-dns-config" rel="nofollow">DNS configurations</a></td>
<td></td>
</tr>
<tr>
<td><code>podLabels</code></td>
<td>Labels to add to the cert-manager pod</td>
<td><code>{}</code></td>
</tr>
<tr>
<td><code>priorityClassName</code></td>
<td>Priority class name for cert-manager and webhook pods</td>
<td><code>""</code></td>
</tr>
<tr>
<td><code>http_proxy</code></td>
<td>Value of the <code>HTTP_PROXY</code> environment variable in the cert-manager pod</td>
<td></td>
</tr>
<tr>
<td><code>https_proxy</code></td>
<td>Value of the <code>HTTPS_PROXY</code> environment variable in the cert-manager pod</td>
<td></td>
</tr>
<tr>
<td><code>no_proxy</code></td>
<td>Value of the <code>NO_PROXY</code> environment variable in the cert-manager pod</td>
<td></td>
</tr>
<tr>
<td><code>webhook.enabled</code></td>
<td>Toggles whether the validating webhook component should be installed</td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>webhook.replicaCount</code></td>
<td>Number of cert-manager webhook replicas</td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>webhook.podAnnotations</code></td>
<td>Annotations to add to the webhook pods</td>
<td><code>{}</code></td>
</tr>
<tr>
<td><code>webhook.extraArgs</code></td>
<td>Optional flags for cert-manager webhook component</td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>webhook.resources</code></td>
<td>CPU/memory resource requests/limits for the webhook pods</td>
<td></td>
</tr>
<tr>
<td><code>webhook.image.repository</code></td>
<td>Webhook image repository</td>
<td><code>quay.io/jetstack/cert-manager-webhook</code></td>
</tr>
<tr>
<td><code>webhook.image.tag</code></td>
<td>Webhook image tag</td>
<td><code>v0.6.2</code></td>
</tr>
<tr>
<td><code>webhook.image.pullPolicy</code></td>
<td>Webhook image pull policy</td>
<td><code>IfNotPresent</code></td>
</tr>
<tr>
<td><code>webhook.caSyncImage.repository</code></td>
<td>CA sync image repository</td>
<td><code>quay.io/munnerz/apiextensions-ca-helper</code></td>
</tr>
<tr>
<td><code>webhook.caSyncImage.tag</code></td>
<td>CA sync image tag</td>
<td><code>v0.1.0</code></td>
</tr>
<tr>
<td><code>webhook.caSyncImage.pullPolicy</code></td>
<td>CA sync image pull policy</td>
<td><code>IfNotPresent</code></td>
</tr>
</tbody>
</table>
<br>
<h3>Deployment</h3>
<hr>
<p>This site is hosted by GitHub pages, and has been deployed directly from the master branch. The site will update automatically when new commits have been made to the master branch. So the site deploys correctly on GitHub pages, the landing page must be named index.html.</p>
<p>To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/lewejuice/oneworld.git into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.</p>
<h3>Credits</h3>
<hr>
<h4>Content</h4>
<p>Magority of the written content I obtained from <a href="https://www.worldwildlife.org/">WWF</a>, which I altered to suit my needs. I did this because I knew WWF would provide accurate infomation about the animals and the help that is needed.</p>
<br>
<h4>Media</h4>
<p>My animal icons were obtained from <a href="#">here.</a> The logo design and hero image I designed my self on adobe illustrator. The images used were all from Google Images with the usage rights tool set too 'labelled for reuse'.</p>
<br>
<h4>Acknowledgements</h4>
<p>The read more text boxes on each section are modeled after the following Stack Overflow <a href="https://stackoverflow.com/questions/53955285/how-to-make-multiple-read-more-buttons-in-same-page-using-one-jquery/53955444" rel="nofollow">example</a>.</p>
<p>The scrolling text boxes on larger screens I obtained the model from this <a href="https://www.nosegraze.com/scrolling-text-box/" rel="nofollow">tutorial</a>.</p>
<p>The 'back to top' button code was obtained from this <a href="https://www.w3schools.com/howto/howto_js_scroll_to_top.asp" rel="nofollow">example</a>.</p>

<p><strong>This is for educational use</strong></p>




