import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Book, Clock, ExternalLink, Newspaper } from 'lucide-react';
import area51Image from '../components/area51.jpg'; 
import birmuda from '../components/birmuda.png';  // Adjust path based on file location

// Local articles data
const localArticles = [
  {
    title: "අපි අද කතා කරමු Area 51 ගැන",
    author: "Mudipakishanimayanga",
    readingTime: 3,
    pubDate: new Date('2024-11-23').toISOString(), // Update with actual date
    link: "#", // Will be handled by modal
    content: `අපි අද කතා කරමු Area 51 ගැන Area 51කියන්නෙ මොකක්ද ,එක පාරටම හිතුනා නේද ,මෙය පිටසක්වලයන් සමඟ ගනුදෙනු කරන තැනක් ලෙස තමයි මිනිසුන් අතර ප්‍රසිද්ද...`, // First few lines of content
    fullContent: `අපි අද කතා කරමු Area 51 ගැන Area 51කියන්නෙ මොකක්ද ,එක පාරටම හිතුනා නේද ,මෙය පිටසක්වලයන් සමඟ ගනුදෙනු කරන තැනක් ලෙස තමයි මිනිසුන් අතර ප්‍රසිද්ද.මෙය ලාස් වේගාස් සිට වයඹ දෙසින් 134km දුරින් නිවාඩා ප්‍රාන්තයේ පිහිටා ඇති හමුදා කඳවුරකි.මෙයට ඉහලින් කිසිම යානයකට ගමන් කිරීම තහනම්.2013 වසර වෙනකම් ඇමරිකානු රජය පිලිගත්තෙවත් නෑ මෙහෙම තැනක් තියේ කියලවත්.නමුත් 2005 පැමිනි තොරතුරු දැනගැනීමෙ පනත නිසා 2013 වසරේ ඔවුන් නිල වශයෙන් මේ තැන ගැන පිලිගන්නවා.මේ තොරතුරු අනුව නම් ඔවුන් මේක රහසිගතව තබාගෙන තියෙන්නෙ මේක තාක්ශනයෙන් උසස් ඔත්තූ බලන යානා නිපදවන තැනක් නිසා..1955 තමයි area 51 ආරම්භ වන්නෙ ඒ project aquatone කියන ව්‍යාපෘතිට මේකෙ අරමුන රුසියාවෙ ඔත්තු බලන යානා නිපදවපු ව්‍යාපෘතියක්.මොවුන්ගෙ පලමු යානාව රේඩාර් වලට හසු නොවෙන්න තමයි හදන්නෙ නෝමල් ප්ලේන් යන්නෙ අඩි 10000/20000 අතර උඩින් මිලිටරි යානා යන්නෙ අඩි 40000ක් උඩින් නමුත් ඔවුන් රුසියාවෙ ඔත්තු බලන්න හදපු යානෙ යන්නෙ අඩි 70000 උසින් මේකෙ නම u2 ඒක නිසා රේඩාර් වලට අහුනොවෙන උසකින් යන්න පුලුවන් .නමුත් කලක් යද්දි රුසියාව මේ යානෙ ගැන දැනගෙන මිසයිල ප්‍රහරෙකින් මේක පුපුරවනවා..ඇමරිකාව වැඩෙ නවත්තයිද නෑ පිස්සුද 🤪වැඩෙ කියන්නෙ පයිලට් වත් දන්නෑ මොකක්ද එයා ගෙනියන ප්ලේන් එකෙන් කරන්නෙ කියලා.ඇමරිකාව ආපහු වැඩෙ පටන් ගන්නො project ranibow කියලා මේ ඔක්කොම වෙන්නෙ අර area 51 එක ඇතුලෙ.මේ හදපු යානෙට නම් තරමක් රේඩාර් අවශෝශනය කරගන්න පුලුවන් හැබැයි මේක මාර විදියට රත් වෙනෝ එයාලා මේ වෑඩෙ නවත්තනෝ..වැඩෙ බාර දෙන්නෙ ලෝකිඩ් මාර්ටින් කම්පැනි එකට .රත් වෙන සීන් එක නිසා වෙන material එකක් යොදාගෙන ආපහු හදනෝ වෙන යානයක්..මේකට ගන්නෙ Titanium වැඩේ කියන්නෙ හොඳම Titanium තියෙන්නෙ රුසියාවෙ .කොහොමහරි ගේමක් ගහලා ඒවා රුසියාවෙන් ගන්නො අරන් අර කම්පැනියෙ තියන්‍ යානෙ හදනෝ මාර සීන් එක කියන්නෙ ඕකෙ පයිලට්ලා පුහුනු කරන්නෙ area 51 එකේ කොහොමද ඉතින් ගේන්නෙ ලොකු ආරක්ෂාව දීලා ලොකු ට්‍රක් එකක දාන් ගේනෝ ඕක..
ඕක 1970 ගනන් වල මිනිස්සු දකිනෝ. අමුතු විදියේ ප්ලේන් ඔය area 51 අහසේ පුහුනු වෙනවා .හරි දැන් මිනිසුන් හිතන්න ගන්නෝ මේ පිටසක්වල එක්ක සීන් එකක් තමයි කියලා.ඒත් එක්කම 1947 දී අමුතු යානයක් රොස්වෙල් වලට කඩන් වැටෙනවා. area 51 එකේ අය කිව්වෙ මේක
කාලගුන තොරතුරු ගන්න හදපු එකක් කියලා මිනිස්සු නම් කිව්වෙ මේක පිටසක්වල යානයක් කියල ඒ යානෙ පිටසක්වල යානයක් කියලා ලොකුවට කතාව ගියා.ඔය අතරෙම
1989 දී රොබට් ලාසාර් නම් පුද්ගලයෙක් තමා area 51 වන ප්‍රදේශය තුළ පිටසක්වල තාක්‍ෂණය පිළිබඳ වැඩ කර ඇති බව කියන්න ගත්තා. ඔහු කියා සිටියේ පිටසක්වල ජීවීන්ගේ වෛද්‍ය ඡායාරූප දැක ඇති බවත් රජය UFO පරීක්ෂා කිරීමට මෙම පහසුකම භාවිතා කළ බවත්ය.ඒ කතාව ඇත්ත හෝ බොරු වේවා ඇමරිකානු බුද්දි අංශෙටත් ඒක වාසි උනා ඇයි කවුරුත් එහෙම හිතුවම ඔත්තූ බලන වැඩෙ කරන්නත් පුලුවන්නෙ.කොහොමහරි ඔය කාලෙ රුසියාවෙන් සුප්මික් 1 කියන සැටලයිට් එක යැව්වා ඕක area 51 උඩින් යවන්න ගත්තා.මේක මාරම කරදරයක් උනා ඇමරිකාවට කොහොමහරි ඇමරිකාවට යානා පුහුනු කරන්න ඒ ගුවන් කලාපය අවශ්‍ය නිසා ඊට ඉහල අහස no fly zone එකක් කරා .දැන් ඒක උඩින් වෙන යානා යන් නෑ..‍රොස්වෙල් සිද්දියට අමතරව 2014 ජුලි මාසෙ සැන්ඩ්‍රා නම් සංචාරක කාන්තවකගේ කැමරාවෙද අමුතු යානයක පින්තූර සටහන් වෙලා තිබ්බා,අනිත් සිදුවීම තමයි පිටසක්වල ජීවියෙක්ගෙ ශරීරයක් පරීක්ශන වගයක යැයි කියන කතාව
තොරතුරු වලට අනුව පිටසක්වල කතාව ඇමරිකානු බුද්දි අංශෙන්ම හදපු එකක් වෙන්නත් පුලුවන් එතකොට ඔවුන්ගෙ ඔත්තු බැලීමෙ වැඩ පාඩුවෙ කරගෙන යන්න පුලුවන් නිසා.
✍️මුදිප කිෂන්`, // Full article content
    thumbnail: area51Image , // You can replace with actual image
    isLocal: true
  }
,
  {
    title: "බර්මියුඩා ත්‍රිකෝණය",
    author: "Mudipakishanimayanga",
    readingTime: 4,
    pubDate: new Date('2024-11-23').toISOString(), // Update with actual date
    link: "#", // Will be handled by modal
    content: `බර්මියුඩා ත්‍රිකෝණය අහලා තියේද? මන් දන්න දේවල් ටිකක් කියන්නම්`, // First few lines of content
    fullContent: `බර්මියුඩා ත්‍රිකෝණය අහලා තියේද? මන් දන්න දේවල් ටිකක් කියන්නම්.මේක හරි අමුතු අත්භූත කතා පිරුනු ප්‍රදේශයක්.මේ ප්‍රදේශය ෆ්ලොරීඩා,බර්මියුඩා,පෙට්‍රිකෝ කියන ප්‍රදේශ තුනෙන් වටවුනු ත්‍රිකෝණා
කාර ප්‍රදේශයක්.ගොඩක් තොරතුරු වල තියෙන්නෙ නැව් දහස් ගනන් ගුවන් යානා සිය ගනන් මේ ප්‍රදේශයේදී අතුරුදන් උනා කියලා තවත් අය මෙහි මුහුදු පතුලෙ වෙනත් විශ්වයකට හෝ පිටසක්වල ක්‍රියාකාරකම් වන බවත් කියවෙනවා.ඒත් ඒවා ඔප්පු වීමක් නෑ .මුලින්ම වාර්තා උනු සිද්දිය ක්‍රිස්ටෝපස් කොලම්බස් ඔය පැත්තෙන් යන කොට 1492 ඔක්තෝබර් 8 තමයි දවස එයාගෙ මාලිමාව උතුරු දිශාව පෙන්වීම නැවතිලා තියෙනවා ,තව ඒ වගේ සිද්දි කිහිපයක් සිදුවෙලා තියෙනවා .ඔහොම කතා ගැන කියවෙනකොට 1964 දි vincet gaddis කියන රචකයා ඔය ප්‍රදේශය බර්මියුඩා ත්‍රිකෝණය කියලා නම් කරනවා.ඔතන ඉඳන් තමයි ඒ නම හැදෙන්නෙ.ඊලඟට උනු අත්භූත කතාව වෙන්නෙ 1872 කාත් කවුරුත් නැති නැවක් ඔය ප්‍රදේශයෙන් හොයා ගන්නවා ඒ නැව mery celester නැව කියලා දැනගන්නවා මේකෙ හිටපු මිනිස්සු 10ක් අතුරුදන් ඒත් නැව තියේ..එයාලට මොකක්ද උනේ කියලා තාමත් දන් නෑ.ආපහු 1918 uss cyclops කියලා නැවක් මිනිස්සු 306 එක්ක අතුරුදහන් වෙනෝ ඔය ප්‍රදේශයෙදි ,ආගිය අතක් නෑ තාමත්.ආපහු 1945 දෙවන ලෝක යුද යුදමය කටයුතු වලට ගත් ටෝපිඩෝ

වර්ගෙ ගුවන් යානා 5ක් එකවරම මේ ප්‍රදේශෙදි නැති වෙනවා..ඕවට මොනාද උනේ කියලා හොයන්න යනවා තවත් යානයක් .මාරම වැඩෙ කියන්නෙ ඒකත් ඔය ප්‍රදේශයට ගියාම අතුරුදහන් වෙනවා.දැනට උනු ආසන්නම සිද්දිය 2015 ඔක්තෝබර් 1 elfaro කියන නැව ඒකත් අතුරුදහන් වෙනවා ඔය වගේම.2007 දි තවත් ගුවන් යානයක් අතුරුදහන් වෙනවා ඔය ප්‍රදේශයෙදි…මේක ලොකු ප්‍රශ්නයක් උනා විද්‍යාඥයන්ට, පටන් ගත්තා චන්ද්‍රිකා තාක්ශනෙන් තොරතුරු ගන්න .ඒ ප්‍රදේශයට ගියා මුහුදු ප්‍රදේශ පරික්ශා කරන්න ගත්තා.ඒ අනුව ඔවුන්ට බොහෝ නිවරදි තොරතුරු හොයාගන්න පුලුවන් උනා මේවට වෙන්නෙ මොකක්ද කියලා.

ඔවුන් සොයා ගත් දේවල් අනුව මේ ප්‍රදේශය පුරා මුහුදෙ ඉතා ගැඹුරු කුහර තියන බව තහවුරු වෙලා තිබේ.
මේව උඩින් නැවක ගියොත් ක්ෂනිකව ඒ නැව ඇදලා ගන්න හැකියාව තිබෙන බව ඔවුන් කියන්නෙ.අනිත් හේතුව තමයි මේ ප්‍රදේශය පුරා පොලව යට වසර දහස් ගානකට කලින් මැරුනු ජලජ ජීවින්ගෙ සිරුරු වලින් පිටවන මීතේන් සල්ෆයිඩ් හේතුවෙන් ඒවා මීතෙන් වායු බුබුලු ලෙස ක්ශනිකව මුහුදෙ ඉහලට පැමිණිලා එම ස්තාන වල ඝනත්වය අඩු වීම් සිදුවබ බව කියනවා, ඒ අවස්ථාවෙ එතනින් නැවක් ගමන් කලොත් ඒක සෙවීමට සිදුනොවන බවත් එය මුහුදු පතුලටම යන බවත් ඔවුන් පවසනවා.කිමිදුම් කරුවන්ට ඔවැනි නැව් වල බොහෝ කොටස් හමු වී ඇති බව හා මීතෙන් වායුව එම ප්‍රදේශයෙ මුහුද යට තිබෙන බවත් තහවුරු වෙලා තිබෙනවා.

ඔය අතරෙම නාසා එකේ ඉන්න randy cervnse කියන විද්‍යාඥයා චන්ද්‍රිකා පින්තූර පරික්ෂා කර බලන අවස්ථාවෙදි ඉතා අමුතු විදියෙ වලාකුලු වර්ගයක් ඔය ප්‍රදේශයට ඉහලින් දැකලා තිබේ. ඔය ෂඩාෂ්‍රාකාර ආකාර වලාකුලු 20km/10km වගේ දුරවල් තිබිලා තියනවා .මුහුදෙ ඔය කියන යානා අතුරුදහන් උනු වෙලාවලදි

මේ වගේ වලාකුලු සාමාන්‍යයෙන් පවතින් නෑ කියලා තමයි එයාලා කියන්නෙ මේ පැත්තට විශේශ වූ වලාකුලු වර්ගයක්ලු මේ..මේ වලාකුලු වල තියන ෂඩාෂ්‍රාකාර හැඩයෙ මුල්ලවල් (edge)වලින් ඉතා විශාල cyclone තත්ව ඇති වන බව ඔවුන් දැනට හොයාගෙන තිබේ,ඒ කිව්වෙ අහසෙ ඉඳන් මුහුදට ඉතා විශාල සුලං පාරක් ප එම ස්තාන වලදි පැමිණෙන බව තමයි පවසන්නෙ.ඕකට නැවක් ගුවන් යානයක් අහු උනාම ඉතුරු වෙයිද ඉතින්.ඔය වගේ හේතු තමයි එයාලා කියන්නෙ.අපි හිතන් ඉන්නෙ දැන් ඒ ප්‍රදේශය හරහා කිසිම නැවක් ගුවන් යානයක් යන්නෑ කියලා නේද එහෙම නෑ බන් ඒක ඉතා කාර්යබහුල මුහුදු සීමාවක්.ඕන තරම් නැව් ගුවන් යානා දැනුත් යනෝ.ඇමරිකානු NAOO කියන සාගර කටයුතු සම්බන්ධ ආයතනයක් නම් කියන්නෙ
ඔය විදියටම නැව් ගුවන් යානා වලට අනතුරු අනෙක් ප්‍රදේශ වල උනත් මේ ප්‍රදේශයට විශේශත්වයක් දීලා තියෙන්නෙ නිබන්ධන කතා සඟරා ලියන අය කියලා ඇයි එයාලට නම් නියම මාතෘකාවක් මේක ලස්සන කතා හදන්න. ✍️Mudipa kishan.`, // Full article content
    thumbnail: birmuda, // You can replace with actual image
    isLocal: true
  }
  // Add more local articles as needed
];

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const MEDIUM_USERNAME = '@mudipakishanimayanga';
  const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(RSS_URL);
        if (response.data.status !== 'ok') {
          throw new Error('Failed to fetch articles');
        }

        const mediumArticles = response.data.items
          .map(article => ({
            ...article,
            thumbnail: article.thumbnail || extractImage(article.content),
            readingTime: Math.ceil(article.content.split(' ').length / 200),
            isLocal: false
          }))
          .filter(article => article.thumbnail && isValidImageUrl(article.thumbnail))
          .slice(0, 2);

        // Combine Medium and local articles
        const allArticles = [...mediumArticles, ...localArticles];
        setArticles(allArticles);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const extractImage = (content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const imgs = div.querySelectorAll('img');
    for (let img of imgs) {
      if (img.src && !img.src.includes('stat?event=post')) {
        return img.src;
      }
    }
    return null;
  };

  const isValidImageUrl = (url) => {
    return url && !url.includes('stat?event=post') && !url.includes('placeholder');
  };

  const handleArticleClick = (article) => {
    if (article.isLocal) {
      setSelectedArticle(article);
      setShowModal(true);
    } else {
      window.open(article.link, '_blank');
    }
  };

  // Article Modal Component
  const ArticleModal = ({ article, onClose }) => {
    if (!article) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">{article.title}</h2>
            <div className="flex items-center gap-4 text-blue-300 text-sm mb-6">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime} min read</span>
              </div>
              <div>{new Date(article.pubDate).toLocaleDateString()}</div>
            </div>
            <div className="text-blue-100 whitespace-pre-wrap leading-relaxed">
              {article.fullContent}
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 transition-colors"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-900/30 to-black flex items-center justify-center">
        <div className="text-blue-300 text-xl">Loading articles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-900/30 to-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-black via-blue-900/30 to-black overflow-hidden">
      {/* Starry background */}
      <div className="fixed inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.7,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text text-center">
            Featured Articles
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <a
              href={`https://medium.com/${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm group"
            >
              <Book className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
              <span className="text-blue-300 group-hover:text-blue-200">View More on Medium</span>
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => handleArticleClick(article)}
                className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {article.isLocal && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-200 text-sm border border-blue-400/30">
                      Local Article
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-100 line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-4 text-blue-300 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readingTime} min read</span>
                    </div>
                    <div>
                      {new Date(article.pubDate).toLocaleDateString()}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    {article.isLocal ? "Read Article" : "Read on Medium"}
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {showModal && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setShowModal(false)}
        />
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MediumArticles;
