import type { ContractBlock } from "@/components/legal/ContractDocument";

// Sözleşme metni gizlilik-politikasi.docx dosyasından birebir aktarılmıştır.
// Metin değiştirilmemiş, özetlenmemiş; yalnızca başlık/madde/liste yapısı
// docx paragraf stillerinden mekanik olarak ayrıştırılmıştır.

export const title = "NAMAZ MOTİVASYON GİZLİLİK POLİTİKASI";
export const lastUpdated = "4 Eylül 2026";

export const blocks: ContractBlock[] = [
  {
    "type": "h2",
    "text": "1. Genel Bilgilendirme"
  },
  {
    "type": "p",
    "text": "Namaz Motivasyon uygulaması (“Uygulama”), kullanıcıların namaz takiplerini düzenli şekilde yapabilmesini, grup veya oda oluşturarak diğer kullanıcılarla birlikte motivasyon sağlayabilmesini ve konuma dayalı namaz vakitlerinden yararlanabilmesini amaçlayan bir mobil uygulamadır."
  },
  {
    "type": "p",
    "text": "Bu Gizlilik Politikası, Uygulama’yı kullanan kişilerin kişisel verilerinin hangi amaçlarla işlendiğini, saklandığını, aktarıldığını ve korunduğunu açıklamak amacıyla hazırlanmıştır."
  },
  {
    "type": "p",
    "text": "Uygulamayı kullanarak bu Gizlilik Politikası’nı okuduğunuzu ve kişisel verilerinizin burada açıklanan yöntemlerle işlenebileceği konusunda bilgilendirildiğinizi kabul etmiş olursunuz."
  },
  {
    "type": "p",
    "text": "Açık rıza gerektiren veri işleme faaliyetlerinde, gerekli açık rıza ayrıca alınır."
  },
  {
    "type": "h2",
    "text": "2. Veri Sorumlusu"
  },
  {
    "type": "p",
    "text": "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu:"
  },
  {
    "type": "p",
    "text": "Adı Soyadı: Oğuzhan Menek\nUygulama / Marka: Namaz Motivasyon\nWeb Sitesi: https://otechi.com\nE-posta: info@oletr.com\nAdres: Küçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir"
  },
  {
    "type": "h2",
    "text": "3. İşlenen Kişisel Veriler"
  },
  {
    "type": "p",
    "text": "Uygulamanın kullanımı sırasında aşağıdaki kişisel veri kategorileri işlenebilir."
  },
  {
    "type": "h3",
    "text": "3.1. Kimlik ve hesap bilgileri"
  },
  {
    "type": "ul",
    "items": [
      "Görünen ad",
      "E-posta adresi",
      "Kullanıcı hesap kimliği",
      "Hesap oluşturma bilgileri",
      "Oturum ve hesap güvenliği bilgileri"
    ]
  },
  {
    "type": "h3",
    "text": "3.2. Grup ve oda bilgileri"
  },
  {
    "type": "ul",
    "items": [
      "Oluşturulan veya katılınan grup ya da oda bilgisi",
      "Grup davet kodu",
      "Grup üyelik bilgisi",
      "Grup içerisindeki rol bilgisi",
      "Grup üyelerinin uygulama içinde görünen adları"
    ]
  },
  {
    "type": "h3",
    "text": "3.3. Namaz takip bilgileri"
  },
  {
    "type": "ul",
    "items": [
      "Namaz vakitlerinin tamamlanma durumu",
      "Günlük namaz takip kayıtları",
      "Namaz takip tarihleri",
      "Grup içerisindeki ilerleme ve tamamlanma bilgileri"
    ]
  },
  {
    "type": "p",
    "text": "Namaz takip kayıtları, kişinin ibadet alışkanlıkları hakkında bilgi içerebilir. Bu nedenle bazı durumlarda dinî veya inançla ilişkili hassas nitelikte kişisel veri olarak değerlendirilebilir."
  },
  {
    "type": "p",
    "text": "Kullanıcı, namaz takip özelliğini kullanıp kullanmamakta serbesttir. Bu özelliğin kullanılmaması, Uygulamanın diğer temel özelliklerinin kullanılmasına engel olmayabilir."
  },
  {
    "type": "h3",
    "text": "3.4. Konum bilgileri"
  },
  {
    "type": "p",
    "text": "Kullanıcı izin verdiğinde, yaklaşık konum bilgisi namaz vakitlerinin kullanıcının bulunduğu bölgeye göre hesaplanması amacıyla kullanılabilir."
  },
  {
    "type": "p",
    "text": "Uygulama, konum izni verilmediğinde varsayılan bir şehir üzerinden namaz vakitlerini hesaplayabilir."
  },
  {
    "type": "p",
    "text": "Konum izni, cihaz ayarları üzerinden her zaman kapatılabilir."
  },
  {
    "type": "h3",
    "text": "3.5. Bildirim bilgileri"
  },
  {
    "type": "p",
    "text": "Bildirimlerin gönderilebilmesi amacıyla aşağıdaki bilgiler işlenebilir:"
  },
  {
    "type": "ul",
    "items": [
      "Cihaza ait bildirim jetonu",
      "Bildirim tercihleri",
      "Ezan bildirim ayarları",
      "Grup bildirim ayarları"
    ]
  },
  {
    "type": "p",
    "text": "Kullanıcı, bildirim izinlerini cihaz ayarları üzerinden istediği zaman kapatabilir."
  },
  {
    "type": "h3",
    "text": "3.6. Teknik bilgiler"
  },
  {
    "type": "p",
    "text": "Uygulamanın güvenli ve düzgün çalışması için sınırlı ölçüde aşağıdaki teknik bilgiler işlenebilir:"
  },
  {
    "type": "ul",
    "items": [
      "Cihaz işletim sistemi",
      "Uygulama sürümü",
      "Teknik hata bilgileri",
      "Performans ve bağlantı bilgileri",
      "Oturum güvenliğiyle ilgili teknik kayıtlar"
    ]
  },
  {
    "type": "p",
    "text": "Uygulama, kullanıcıların rehberine, fotoğraflarına veya mikrofonuna erişmez. Bu tür bir erişim ileride gerekli hâle gelirse kullanıcıdan ayrıca izin istenir."
  },
  {
    "type": "h2",
    "text": "4. Kişisel Verilerin İşlenme Amaçları"
  },
  {
    "type": "p",
    "text": "Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:"
  },
  {
    "type": "ul",
    "items": [
      "Kullanıcı hesabı oluşturmak ve yönetmek",
      "Uygulamaya güvenli şekilde giriş yapılmasını sağlamak",
      "Namaz takip kayıtlarını saklamak ve senkronize etmek",
      "Grup ve oda özelliklerini sunmak",
      "Grup üyeliklerini ve davet kodlarını yönetmek",
      "Grup içerisindeki ilerleme bilgilerini göstermek",
      "Konuma göre namaz vakitlerini hesaplamak",
      "Ezan ve grup bildirimlerini göndermek",
      "Uygulamanın güvenliğini sağlamak",
      "Yetkisiz erişimleri ve kötüye kullanımı önlemek",
      "Teknik sorunları tespit etmek ve gidermek",
      "Kullanıcı taleplerini yanıtlamak",
      "Hesap silme taleplerini yerine getirmek",
      "Yasal yükümlülükleri yerine getirmek",
      "Uygulamanın işleyişini geliştirmek"
    ]
  },
  {
    "type": "p",
    "text": "Kişisel verileriniz, bu amaçlarla bağlantılı olmayan başka amaçlarla kullanılmaz."
  },
  {
    "type": "h2",
    "text": "5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri"
  },
  {
    "type": "p",
    "text": "Kişisel verileriniz, KVKK’nın 5. maddesinde düzenlenen aşağıdaki hukuki sebeplere dayanılarak işlenebilir:"
  },
  {
    "type": "ul",
    "items": [
      "Bir sözleşmenin kurulması veya ifası için gerekli olması",
      "Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi",
      "Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması",
      "Veri sorumlusunun meşru menfaatinin bulunması",
      "Gerektiğinde açık rızanızın bulunması"
    ]
  },
  {
    "type": "p",
    "text": "Konum ve bildirim gibi izin gerektiren özellikler, cihaz işletim sistemi üzerinden verdiğiniz izinlere bağlı olarak çalışır. Bu izinleri istediğiniz zaman geri çekebilirsiniz."
  },
  {
    "type": "p",
    "text": "Namaz takip bilgilerinin dinî veya inançla ilişkili hassas nitelikte veri olarak değerlendirilebileceği durumlarda, bu veriler yalnızca ilgili mevzuatta öngörülen şartlar çerçevesinde ve hizmetin sunulması için gerekli olduğu ölçüde işlenir."
  },
  {
    "type": "h2",
    "text": "6. Kişisel Verilerin Aktarılabileceği Taraflar"
  },
  {
    "type": "p",
    "text": "Kişisel verileriniz yalnızca Uygulamanın çalışması için gerekli olduğu ölçüde aşağıdaki taraflarla paylaşılabilir."
  },
  {
    "type": "h3",
    "text": "6.1. Supabase"
  },
  {
    "type": "p",
    "text": "Kullanıcı hesabı, profil, grup, üyelik ve namaz takip verilerinin saklanması ve senkronize edilmesi amacıyla Supabase altyapısından yararlanılmaktadır."
  },
  {
    "type": "h3",
    "text": "6.2. Bildirim hizmet sağlayıcıları"
  },
  {
    "type": "p",
    "text": "Bildirimlerin gönderilebilmesi için gerekli bildirim jetonu ve bildirim tercihleri, teknik bildirim hizmetleriyle paylaşılabilir."
  },
  {
    "type": "h3",
    "text": "6.3. Teknik hizmet sağlayıcıları"
  },
  {
    "type": "p",
    "text": "Uygulamanın barındırılması, teknik olarak işletilmesi, güvenliğinin sağlanması ve destek hizmetlerinin yürütülmesi için hizmet alınan teknik sağlayıcılarla gerekli ölçüde veri paylaşımı yapılabilir."
  },
  {
    "type": "h3",
    "text": "6.4. Yetkili kurum ve kuruluşlar"
  },
  {
    "type": "p",
    "text": "Kişisel verileriniz, yalnızca kanunen yetkili kamu kurum veya kuruluşlarının hukuken geçerli talepleri doğrultusunda aktarılabilir."
  },
  {
    "type": "h3",
    "text": "6.5. Grup üyeleri"
  },
  {
    "type": "p",
    "text": "Grup özelliğini kullandığınızda, grup içerisindeki diğer üyeler yalnızca paylaşılması amaçlanan bilgileri görebilir."
  },
  {
    "type": "p",
    "text": "Bu bilgiler şunlarla sınırlıdır:"
  },
  {
    "type": "ul",
    "items": [
      "Uygulama içindeki görünen adınız",
      "Grup üyeliğiniz",
      "Grup içerisindeki ilerleme bilgileriniz"
    ]
  },
  {
    "type": "p",
    "text": "E-posta adresiniz ve doğrudan hesap bilgileriniz grup üyeleriyle paylaşılmaz."
  },
  {
    "type": "h2",
    "text": "7. Yurt Dışına Veri Aktarımı"
  },
  {
    "type": "p",
    "text": "Uygulamanın kullandığı bazı teknik hizmet sağlayıcıların sunucuları Türkiye dışında bulunabilir."
  },
  {
    "type": "p",
    "text": "Bu nedenle kişisel verileriniz, hizmetin sunulması için gerekli olduğu ölçüde ve KVKK’da öngörülen yurt dışına veri aktarımı şartlarına uygun şekilde yurt dışına aktarılabilir."
  },
  {
    "type": "p",
    "text": "Yurt dışına veri aktarımı yapılırken kişisel verilerin güvenliğinin korunması için gerekli teknik ve idari tedbirler alınır."
  },
  {
    "type": "h2",
    "text": "8. Kişisel Verilerin Saklanma Süresi"
  },
  {
    "type": "p",
    "text": "Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca saklanır."
  },
  {
    "type": "ul",
    "items": [
      "Hesap ve profil bilgileri hesabınız aktif olduğu sürece saklanır.",
      "Grup ve üyelik bilgileri ilgili grup üyeliği devam ettiği sürece saklanır.",
      "Namaz takip kayıtları hesabınız aktif olduğu sürece veya silme talebiniz yerine getirilinceye kadar saklanır.",
      "Bildirim jetonu ve bildirim tercihleri, bildirim hizmetini kullandığınız sürece saklanır.",
      "Teknik kayıtlar, güvenlik ve yasal yükümlülükler için gerekli olan süre boyunca saklanır."
    ]
  },
  {
    "type": "p",
    "text": "Hesabınızı sildiğinizde, hesabınızla doğrudan ilişkili kişisel verileriniz, yasal olarak saklanması zorunlu olan kayıtlar hariç olmak üzere silinir, yok edilir veya anonim hâle getirilir."
  },
  {
    "type": "p",
    "text": "Verilerin silinmesi, yasal saklama yükümlülükleri veya devam eden bir uyuşmazlığın bulunması gibi durumlarda ilgili mevzuatta öngörülen sürelerin sonunda gerçekleştirilebilir."
  },
  {
    "type": "h2",
    "text": "9. Kişisel Verilerin Güvenliği"
  },
  {
    "type": "p",
    "text": "Kişisel verilerinizin hukuka aykırı olarak işlenmesini, erişilmesini, kaybolmasını veya yetkisiz kişilerle paylaşılmasını önlemek amacıyla uygun teknik ve idari tedbirler alınır."
  },
  {
    "type": "p",
    "text": "Bu kapsamda:"
  },
  {
    "type": "ul",
    "items": [
      "Yetkisiz erişimlere karşı erişim kontrolleri uygulanır.",
      "Kullanıcı oturumlarının güvenliği korunur.",
      "Veri aktarımı sırasında uygun güvenlik yöntemlerinden yararlanılır.",
      "Hizmet sağlayıcıların güvenlik uygulamaları dikkate alınır.",
      "Gereksiz kişisel veriler işlenmez.",
      "Hesap silme talepleri ilgili süreçlere uygun şekilde değerlendirilir."
    ]
  },
  {
    "type": "p",
    "text": "Bununla birlikte, internet üzerinden yapılan hiçbir veri aktarımının tamamen risksiz olduğu garanti edilemez."
  },
  {
    "type": "h2",
    "text": "10. Kullanıcı Hakları"
  },
  {
    "type": "p",
    "text": "KVKK’nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:"
  },
  {
    "type": "ul",
    "items": [
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
      "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme",
      "Kişisel verilerinizin işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme",
      "Kişisel verilerinizin aktarıldığı üçüncü kişileri bilme",
      "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme",
      "KVKK’da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme",
      "Düzeltme, silme veya yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme",
      "İşlenen verilerin yalnızca otomatik sistemler aracılığıyla analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
      "Kişisel verilerinizin kanuna aykırı işlenmesi nedeniyle zarar doğması hâlinde zararın giderilmesini talep etme"
    ]
  },
  {
    "type": "h2",
    "text": "11. Hesap Silme"
  },
  {
    "type": "p",
    "text": "Hesabınızı uygulama içerisindeki aşağıdaki adımları izleyerek silebilirsiniz:"
  },
  {
    "type": "p",
    "text": "Hesap > Tehlikeli Bölge > Hesabı Sil"
  },
  {
    "type": "p",
    "text": "Hesap silme işlemi tamamlandığında, hesabınızla ilişkili kişisel veriler ve namaz takip kayıtları, yasal saklama yükümlülükleri saklı kalmak kaydıyla silinir, yok edilir veya anonim hâle getirilir."
  },
  {
    "type": "p",
    "text": "Hesap silme sırasında teknik bir sorun yaşamanız hâlinde info@oletr.com adresinden bizimle iletişime geçebilirsiniz."
  },
  {
    "type": "h2",
    "text": "12. Çocukların Gizliliği"
  },
  {
    "type": "p",
    "text": "Namaz Motivasyon, çocuklara özel olarak tasarlanmış bir uygulama değildir. Bununla birlikte uygulama, farklı yaş gruplarındaki kullanıcılar tarafından kullanılabilir."
  },
  {
    "type": "p",
    "text": "13 yaşın altındaki kullanıcıların uygulamayı ebeveynlerinin veya yasal temsilcilerinin bilgisi ve gözetimi altında kullanması gerekir."
  },
  {
    "type": "p",
    "text": "Bir ebeveyn veya yasal temsilci olarak çocuğunuzun izniniz veya bilginiz dışında uygulama üzerinden kişisel veri paylaştığını düşünüyorsanız, info@oletr.com adresinden bizimle iletişime geçebilirsiniz."
  },
  {
    "type": "p",
    "text": "Böyle bir durum tespit edildiğinde, ilgili veriler yürürlükteki mevzuata uygun şekilde incelenir ve gerekli görülmesi hâlinde silinir veya anonim hâle getirilir."
  },
  {
    "type": "h2",
    "text": "13. Çerezler ve Takip Teknolojileri"
  },
  {
    "type": "p",
    "text": "Mobil uygulama içerisinde web sitelerine özgü çerezler kullanılmamaktadır."
  },
  {
    "type": "p",
    "text": "Otechi web sitesinde analiz, reklam veya benzeri takip teknolojileri kullanılması hâlinde, bu teknolojilere ilişkin açıklamalar ayrıca web sitesinde yayımlanacak Çerez Politikası’nda yer alır."
  },
  {
    "type": "h2",
    "text": "14. Gizlilik Politikası’nda Değişiklikler"
  },
  {
    "type": "p",
    "text": "Bu Gizlilik Politikası, uygulamadaki özelliklerin, kullanılan hizmet sağlayıcıların veya yasal düzenlemelerin değişmesi hâlinde güncellenebilir."
  },
  {
    "type": "p",
    "text": "Güncellenmiş metin, aşağıdaki adreste yayımlandığı tarihten itibaren geçerli olur:"
  },
  {
    "type": "p",
    "text": "https://otechi.com/urunler/namaz-motivasyonu/gizlilik-politikasi"
  },
  {
    "type": "p",
    "text": "Önemli değişiklikler olması hâlinde, uygun görülen durumlarda uygulama içi bildirim veya benzeri yöntemlerle kullanıcılar bilgilendirilebilir."
  },
  {
    "type": "h2",
    "text": "15. İletişim"
  },
  {
    "type": "p",
    "text": "Bu Gizlilik Politikası, kişisel verilerinizin işlenmesi veya KVKK kapsamındaki haklarınız hakkında sorularınız için aşağıdaki iletişim kanalından bize ulaşabilirsiniz:"
  },
  {
    "type": "p",
    "text": "Veri Sorumlusu: Oğuzhan Menek\nE-posta: info@oletr.com\nAdres: Küçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir"
  },
  {
    "type": "p",
    "text": "Başvurularınızda adınızı, iletişim bilgilerinizi ve talebinizin konusunu açıkça belirtmeniz, başvurunuzun daha hızlı değerlendirilmesini sağlayacaktır."
  }
];
