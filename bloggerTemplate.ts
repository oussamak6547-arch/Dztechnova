export const getBloggerTemplate = () => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
    <meta charset='UTF-8'/>
    <meta content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' name='viewport'/>
    <title><data:view.title.escaped/></title>
    <b:include data='blog' name='all-head-content'/>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>

    <!-- Tailwind CSS (CDN for ease of use in Blogger) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              arabic: ['Cairo', 'sans-serif'],
            },
            colors: {
              slate: {
                900: '#0f172a',
                800: '#1e293b',
                700: '#334155',
                400: '#94a3b8',
                300: '#cbd5e1',
                100: '#f1f5f9',
              },
              cyan: {
                400: '#22d3ee',
                500: '#06b6d4',
                900: '#164e63',
              }
            }
          }
        }
      }
    </script>

    <!-- Custom Styles -->
    <b:skin><![CDATA[
      body {
        background-color: #0f172a;
        color: #e2e8f0;
      }
      /* Custom Scrollbar */
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #1e293b; }
      ::-webkit-scrollbar-thumb { background: #38bdf8; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #0ea5e9; }
    ]]></b:skin>
</head>
<body>

  <!-- Header -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
         <div class="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
           <span class="font-bold text-white text-lg">D</span>
         </div>
         <h1 class="text-xl font-bold tracking-tighter text-white">
           <a expr:href='data:blog.homepageUrl' class="hover:text-cyan-400 transition-colors">
             <data:blog.title/>
           </a>
         </h1>
      </div>
      
      <!-- Menu -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="/" class="text-sm font-medium text-slate-300 hover:text-cyan-400 uppercase tracking-widest">Home</a>
        <a href="/search/label/Tech" class="text-sm font-medium text-slate-300 hover:text-cyan-400 uppercase tracking-widest">Tech</a>
        <a href="/search/label/AI" class="text-sm font-medium text-slate-300 hover:text-cyan-400 uppercase tracking-widest">AI</a>
      </nav>

      <div class="flex items-center gap-4">
         <!-- Search Toggle could go here -->
      </div>
    </div>
  </header>

  <!-- Featured Slider Section (Only on Homepage) -->
  <b:if cond='data:view.isHomepage'>
    <div class="pt-16">
      <b:section id='featured-posts' class='w-full' maxwidgets='1' showaddelement='yes'>
        <b:widget id='FeaturedPost1' locked='false' title='Featured Post' type='FeaturedPost'>
          <b:includable id='main'>
            <div class="relative w-full h-[500px] overflow-hidden bg-slate-900 group">
               <b:if cond='data:postFirstImage'>
                 <img expr:src='data:postFirstImage' class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"/>
               </b:if>
               <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
               <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col items-start gap-4">
                 <h2 class="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight drop-shadow-lg">
                   <a expr:href='data:post.url'><data:post.title/></a>
                 </h2>
                 <div class="flex items-center gap-4 text-slate-300 text-sm">
                   <span><data:post.dateHeader/></span>
                 </div>
               </div>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </div>
  </b:if>

  <!-- Main Content Layout -->
  <div class="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8 pt-24">
    
    <!-- Main Blog Posts -->
    <div class="w-full lg:w-2/3">
      <div class="mb-8 border-b border-slate-700 pb-4 flex justify-between items-center">
        <h2 class="text-2xl font-bold text-white tracking-wide">
          <span class="text-cyan-400">#</span> Latest News
        </h2>
      </div>

      <b:section id='main' showaddelement='yes'>
        <b:widget id='Blog1' locked='false' title='Blog Posts' type='Blog'>
          <b:includable id='main'>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
               <b:loop values='data:posts' var='post'>
                 <b:include data='post' name='postCard'/>
               </b:loop>
             </div>
             <!-- Pagination -->
             <div class="mt-8 flex justify-center">
               <b:include name='nextPrev'/>
             </div>
          </b:includable>

          <b:includable id='postCard' var='post'>
             <article class="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full">
                <div class="relative h-48 overflow-hidden">
                  <b:if cond='data:post.firstImageUrl'>
                    <a expr:href='data:post.url'>
                      <img expr:src='data:post.firstImageUrl' class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                    </a>
                  </b:if>
                  <div class="absolute top-4 left-4">
                     <span class="px-2 py-1 bg-slate-900/80 backdrop-blur text-cyan-400 text-xs font-bold uppercase rounded border border-cyan-900">
                       News
                     </span>
                  </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                   <h3 class="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                     <a expr:href='data:post.url'><data:post.title/></a>
                   </h3>
                   <div class="text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">
                     <data:post.snippet/>
                   </div>
                   <div class="flex items-center justify-between pt-4 border-t border-slate-700/50 text-xs text-slate-500 font-medium">
                     <span><data:post.dateHeader/></span>
                     <a expr:href='data:post.url' class="text-cyan-500 hover:text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                       Read More
                     </a>
                   </div>
                </div>
             </article>
          </b:includable>
          
          <b:includable id='nextPrev'>
             <div class='flex gap-4'>
               <b:if cond='data:newerPageUrl'>
                 <a class='px-4 py-2 bg-slate-800 text-white rounded' expr:href='data:newerPageUrl'>Previous</a>
               </b:if>
               <b:if cond='data:olderPageUrl'>
                 <a class='px-4 py-2 bg-slate-800 text-white rounded' expr:href='data:olderPageUrl'>Next</a>
               </b:if>
             </div>
          </b:includable>
          <!-- Required placeholder includables for valid Blogger XML -->
          <b:includable id='post' var='post'></b:includable>
          <b:includable id='comments' var='post'></b:includable>
        </b:widget>
      </b:section>
    </div>

    <!-- Sidebar -->
    <aside class="w-full lg:w-1/3 space-y-8">
      <b:section id='sidebar' showaddelement='yes'>
        <b:widget id='Profile1' locked='false' title='About Me' type='Profile'>
           <b:includable id='main'>
             <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
               <h3 class="text-lg font-bold text-white mb-4">About</h3>
               <div class="text-slate-400 text-sm">
                 <data:aboutme/>
               </div>
             </div>
           </b:includable>
        </b:widget>
        
        <b:widget id='Label1' locked='false' title='Categories' type='Label'>
          <b:includable id='main'>
            <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
               <h3 class="text-lg font-bold text-white mb-4"><data:title/></h3>
               <div class="space-y-2">
                 <b:loop values='data:labels' var='label'>
                   <div class="flex justify-between items-center text-sm group cursor-pointer">
                     <a expr:href='data:label.url' class="text-slate-400 group-hover:text-cyan-400 transition-colors"><data:label.name/></a>
                     <span class="bg-slate-900 text-slate-500 px-2 py-0.5 rounded-full text-xs"><data:label.count/></span>
                   </div>
                 </b:loop>
               </div>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </aside>

  </div>

  <!-- Footer -->
  <footer class="bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-12">
    <div class="container mx-auto px-4 text-center text-slate-500 text-sm">
      <p>&copy; <span id='currentYear'></span> <data:blog.title/>. All rights reserved.</p>
      <p>Theme DZ-Tech Nova by AI.</p>
    </div>
  </footer>
  
  <script>
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  </script>
</body>
</html>`;
};