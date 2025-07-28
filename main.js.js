// بيانات العيادات
const clinics = [
    {
        id: 1,
        name: "عيادة طب الأسنان العامة",
        doctor: "د. أحمد محمد",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=عيادة+الأسنان+العامة",
        phone: "0123456789"
    },
    {
        id: 2,
        name: "عيادة جراحة الأسنان",
        doctor: "د. فاطمة علي",
        image: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=جراحة+الأسنان",
        phone: "0123456790"
    },
    {
        id: 3,
        name: "عيادة تقويم الأسنان",
        doctor: "د. محمد حسن",
        image: "https://via.placeholder.com/300x200/27ae60/ffffff?text=تقويم+الأسنان",
        phone: "0123456791"
    },
    {
        id: 4,
        name: "عيادة طب الأسنان للأطفال",
        doctor: "د. سارة أحمد",
        image: "https://via.placeholder.com/300x200/f39c12/ffffff?text=أسنان+الأطفال",
        phone: "0123456792"
    },
    {
        id: 5,
        name: "عيادة زراعة الأسنان",
        doctor: "د. خالد محمود",
        image: "https://via.placeholder.com/300x200/9b59b6/ffffff?text=زراعة+الأسنان",
        phone: "0123456793"
    },
    {
        id: 6,
        name: "عيادة تجميل الأسنان",
        doctor: "د. نادية عمر",
        image: "https://via.placeholder.com/300x200/1abc9c/ffffff?text=تجميل+الأسنان",
        phone: "0123456794"
    },
    {
        id: 7,
        name: "عيادة علاج اللثة",
        doctor: "د. وليد عبد الله",
        image: "https://via.placeholder.com/300x200/34495e/ffffff?text=علاج+اللثة",
        phone: "0123456795"
    },
    {
        id: 8,
        name: "عيادة الأسنان الرقمية",
        doctor: "د. ريم عبد الرحمن",
        image: "https://via.placeholder.com/300x200/d35400/ffffff?text=الأسنان+الرقمية",
        phone: "0123456796"
    },
    {
        id: 9,
        name: "عيادة طب الأسنان الوقائي",
        doctor: "د. طارق محمد",
        image: "https://via.placeholder.com/300x200/c0392b/ffffff?text=الأسنان+الوقائية",
        phone: "0123456797"
    },
    {
        id: 10,
        name: "عيادة طب الأسنان الطارئ",
        doctor: "د. منى أحمد",
        image: "https://via.placeholder.com/300x200/2980b9/ffffff?text=الأسنان+الطارئة",
        phone: "0123456798"
    },
    {
        id: 11,
        name: "عيادة تبييض الأسنان",
        doctor: "د. يوسف علي",
        image: "https://via.placeholder.com/300x200/8e44ad/ffffff?text=تبييض+الأسنان",
        phone: "0123456799"
    },
    {
        id: 12,
        name: "عيادة جراحة الفم",
        doctor: "د. هند محمد",
        image: "https://via.placeholder.com/300x200/2c3e50/ffffff?text=جراحة+الفم",
        phone: "0123456800"
    },
    {
        id: 13,
        name: "عيادة طب الأسنان التجميلي",
        doctor: "د. ماهر أحمد",
        image: "https://via.placeholder.com/300x200/16a085/ffffff?text=الأسنان+التجميلية",
        phone: "0123456801"
    },
    {
        id: 14,
        name: "عيادة طب الأسنان المتطور",
        doctor: "د. نور عبد الله",
        image: "https://via.placeholder.com/300x200/f39c12/ffffff?text=الأسنان+المتطورة",
        phone: "0123456802"
    },
    {
        id: 15,
        name: "عيادة طب الأسنان الشامل",
        doctor: "د. سلمى محمد",
        image: "https://via.placeholder.com/300x200/e67e22/ffffff?text=الأسنان+الشاملة",
        phone: "0123456803"
    }
];

// تحميل العيادات
function loadClinics() {
    const container = document.getElementById('clinics-container');
    if (!container) {
        console.warn('Container for clinics not found');
        return;
    }
    
    container.innerHTML = '';
    
    clinics.forEach(clinic => {
        const clinicImage = clinic.image || 'https://via.placeholder.com/300x200/cccccc/ffffff?text=لا+توجد+صورة';
        const clinicCard = `
            <div class="clinic-card">
                <div class="clinic-image" style="background-image: url('${clinicImage}');"></div>
                <div class="clinic-info">
                    <h3>${clinic.name}</h3>
                    <p><strong>الطبيب:</strong> ${clinic.doctor}</p>
                    <a href="tel:${clinic.phone}" class="contact-doctor">
                        <i class="fas fa-phone"></i> اتصال مباشر
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += clinicCard;
    });
}

// إدارة النوافذ المنبثقة
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function openRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// إغلاق النوافذ المنبثقة عند النقر خارجها
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// معالجة نموذج تسجيل الدخول
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم تسجيل الدخول بنجاح!');
    closeModal('loginModal');
});

// معالجة نموذج التسجيل
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إنشاء الحساب بنجاح!');
    closeModal('registerModal');
});

// إضافة تأثيرات التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
});

// تحميل إعدادات الموقع من التخزين المحلي
function loadSiteSettings() {
    const settings = JSON.parse(localStorage.getItem('siteSettings')) || {
        centerName: 'مركز فاطمة لطب الأسنان',
        centerDescription: 'أفضل خدمات طب الأسنان في المنطقة مع فريق من الخبراء المتخصصين',
        logoUrl: 'https://via.placeholder.com/50x50/3498db/ffffff?text=F',
        coverUrl: 'https://via.placeholder.com/1200x400/3498db/ffffff?text=مركز+فاطمة+لطب+الأسنان',
        phoneNumber: '0123-456-789',
        emailAddress: 'info@fatimadental.com',
        address: 'شارع الصحة، المدينة الطبية، الرياض',
        workDays: 'السبت - الخميس',
        workHours: '8:00 صباحاً - 8:00 مساءً',
        fridayHours: '4:00 مساءً - 8:00 مساءً'
    };
    
    // تحديث قيم المدخلات
    document.getElementById('centerName').value = settings.centerName;
    document.getElementById('centerDescription').value = settings.centerDescription;
    document.getElementById('phoneNumber').value = settings.phoneNumber;
    document.getElementById('emailAddress').value = settings.emailAddress;
    document.getElementById('address').value = settings.address;
    document.getElementById('workDays').value = settings.workDays;
    document.getElementById('workHours').value = settings.workHours;
    document.getElementById('fridayHours').value = settings.fridayHours;
    
    // تحديث معاينة الشعار
    if (settings.logoUrl) {
        document.querySelector('#logoPreview img').src = settings.logoUrl;
        document.querySelector('.logo img').src = settings.logoUrl;
    }
    
    // تحديث اسم المركز
    document.querySelector('.logo h1').textContent = settings.centerName;
    document.getElementById('previewCenterName').textContent = settings.centerName;
}

// تحميل إعدادات التصميم من التخزين المحلي
function loadDesignSettings() {
    const settings = JSON.parse(localStorage.getItem('designSettings')) || {
        primaryColor: '#3498db',
        secondaryColor: '#95a5a6',
        backgroundColor: '#ffffff',
        textColor: '#333333',
        headerColor: '#ffffff',
        footerColor: '#2c3e50',
        fontSize: 16,
        fontFamily: "'Tajawal', Arial, sans-serif",
        headingFontFamily: "'Tajawal', Arial, sans-serif",
        containerWidth: 100,
        spacing: 20,
        borderRadius: 10,
        shadowIntensity: 10,
        showHeroSection: true,
        showFeaturesSection: true,
        showClinicsSection: true,
        showFooter: true,
        rtlLayout: true,
        buttonStyle: 'rounded',
        cardStyle: 'raised'
    };
    
    // تطبيق الإعدادات
    applyDesignSettings(settings);
    
    // تحديث قيم المدخلات
    document.getElementById('primaryColor').value = settings.primaryColor;
    document.getElementById('secondaryColor').value = settings.secondaryColor;
    document.getElementById('backgroundColor').value = settings.backgroundColor;
    document.getElementById('textColor').value = settings.textColor;
    document.getElementById('headerColor').value = settings.headerColor;
    document.getElementById('footerColor').value = settings.footerColor;
    document.getElementById('fontSize').value = settings.fontSize;
    document.getElementById('fontFamily').value = settings.fontFamily;
    document.getElementById('headingFontFamily').value = settings.headingFontFamily;
    document.getElementById('containerWidth').value = settings.containerWidth;
    document.getElementById('spacing').value = settings.spacing;
    document.getElementById('borderRadius').value = settings.borderRadius;
    document.getElementById('shadowIntensity').value = settings.shadowIntensity;
    document.getElementById('showHeroSection').checked = settings.showHeroSection;
    document.getElementById('showFeaturesSection').checked = settings.showFeaturesSection;
    document.getElementById('showClinicsSection').checked = settings.showClinicsSection;
    document.getElementById('showFooter').checked = settings.showFooter;
    document.getElementById('rtlLayout').checked = settings.rtlLayout;
    document.getElementById('buttonStyle').value = settings.buttonStyle;
    document.getElementById('cardStyle').value = settings.cardStyle;
    
    // تحديث العروض
    updatePreviews();
}

// تطبيق إعدادات التصميم
function applyDesignSettings(settings) {
    // تطبيق الألوان
    document.documentElement.style.setProperty('--primary-color', settings.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', settings.secondaryColor);
    document.documentElement.style.setProperty('--background-color', settings.backgroundColor);
    document.documentElement.style.setProperty('--text-color', settings.textColor);
    document.documentElement.style.setProperty('--header-color', settings.headerColor);
    document.documentElement.style.setProperty('--footer-color', settings.footerColor);
    
    // تطبيق الخطوط
    document.documentElement.style.setProperty('--font-size', settings.fontSize + 'px');
    document.documentElement.style.setProperty('--font-family', settings.fontFamily);
    document.documentElement.style.setProperty('--heading-font-family', settings.headingFontFamily);
    
    // تطبيق التخطيط
    document.documentElement.style.setProperty('--container-width', settings.containerWidth + '%');
    document.documentElement.style.setProperty('--spacing', settings.spacing + 'px');
    document.documentElement.style.setProperty('--border-radius', settings.borderRadius + 'px');
    document.documentElement.style.setProperty('--shadow-intensity', settings.shadowIntensity + '%');
    
    // تطبيق التخطيط من اليمين لليسار
    document.body.dir = settings.rtlLayout ? 'rtl' : 'ltr';
    document.body.style.textAlign = settings.rtlLayout ? 'right' : 'left';
    
    // تطبيق أنماط الأزرار والبطاقات
    updateButtonStyles(settings.buttonStyle);
    updateCardStyles(settings.cardStyle);
}

// تحديث أنماط الأزرار
function updateButtonStyles(style) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.remove('rounded', 'square', 'pill');
        btn.classList.add(style);
    });
}

// تحديث أنماط البطاقات
function updateCardStyles(style) {
    const cards = document.querySelectorAll('.feature-card, .clinic-card');
    cards.forEach(card => {
        card.classList.remove('flat', 'raised', 'outlined');
        card.classList.add(style);
    });
}

// تحديث معاينات الألوان
function updateColorPreview(colorId) {
    const colorValue = document.getElementById(colorId).value;
    const previewId = colorId + 'Preview';
    document.getElementById(previewId).style.backgroundColor = colorValue;
    updateDesignPreview();
}

// تحديث معاينة حجم الخط
function updateFontSizePreview() {
    const fontSize = document.getElementById('fontSize').value;
    document.getElementById('fontSizeValue').textContent = fontSize + 'px';
    updateDesignPreview();
}

// تحديث معاينة نوع الخط
function updateFontFamilyPreview() {
    updateDesignPreview();
}

// تحديث معاينة نوع خط العناوين
function updateHeadingFontPreview() {
    updateDesignPreview();
}

// تحديث معاينة عرض المحتوى
function updateContainerWidthPreview() {
    const width = document.getElementById('containerWidth').value;
    document.getElementById('containerWidthValue').textContent = width + '%';
    updateDesignPreview();
}

// تحديث معاينة التباعد
function updateSpacingPreview() {
    const spacing = document.getElementById('spacing').value;
    document.getElementById('spacingValue').textContent = spacing + 'px';
    updateDesignPreview();
}

// تحديث معاينة زوايا الزوايا
function updateBorderRadiusPreview() {
    const radius = document.getElementById('borderRadius').value;
    document.getElementById('borderRadiusValue').textContent = radius + 'px';
    updateDesignPreview();
}

// تحديث معاينة شدة الظلال
function updateShadowPreview() {
    const intensity = document.getElementById('shadowIntensity').value;
    document.getElementById('shadowValue').textContent = intensity + '%';
    updateDesignPreview();
}

// تحديث معاينة التصميم
function updateDesignPreview() {
    const preview = document.getElementById('designPreview');
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const backgroundColor = document.getElementById('backgroundColor').value;
    const textColor = document.getElementById('textColor').value;
    const headerColor = document.getElementById('headerColor').value;
    const footerColor = document.getElementById('footerColor').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontFamily = document.getElementById('fontFamily').value;
    const borderRadius = document.getElementById('borderRadius').value;
    
    // تحديث معاينة التصميم
    preview.style.backgroundColor = backgroundColor;
    preview.style.color = textColor;
    preview.style.fontFamily = fontFamily;
    preview.style.fontSize = fontSize + 'px';
    
    // تحديث عناصر المعاينة
    const previewHeader = preview.querySelector('.preview-header');
    const previewButton = preview.querySelector('.btn-primary');
    const previewFooter = preview.querySelector('.preview-footer');
    
    if (previewHeader) previewHeader.style.backgroundColor = headerColor;
    if (previewButton) {
        previewButton.style.backgroundColor = primaryColor;
        previewButton.style.borderRadius = borderRadius + 'px';
    }
    if (previewFooter) previewFooter.style.backgroundColor = footerColor;
}

// حفظ إعدادات المظهر
function saveAppearanceSettings() {
    const settings = {
        primaryColor: document.getElementById('primaryColor').value,
        secondaryColor: document.getElementById('secondaryColor').value,
        backgroundColor: document.getElementById('backgroundColor').value,
        textColor: document.getElementById('textColor').value,
        headerColor: document.getElementById('headerColor').value,
        footerColor: document.getElementById('footerColor').value,
        fontSize: parseInt(document.getElementById('fontSize').value),
        fontFamily: document.getElementById('fontFamily').value,
        headingFontFamily: document.getElementById('headingFontFamily').value,
        containerWidth: parseInt(document.getElementById('containerWidth').value),
        spacing: parseInt(document.getElementById('spacing').value),
        borderRadius: parseInt(document.getElementById('borderRadius').value),
        shadowIntensity: parseInt(document.getElementById('shadowIntensity').value),
        showHeroSection: document.getElementById('showHeroSection').checked,
        showFeaturesSection: document.getElementById('showFeaturesSection').checked,
        showClinicsSection: document.getElementById('showClinicsSection').checked,
        showFooter: document.getElementById('showFooter').checked,
        rtlLayout: document.getElementById('rtlLayout').checked,
        buttonStyle: document.getElementById('buttonStyle').value,
        cardStyle: document.getElementById('cardStyle').value
    };
    
    // حفظ في التخزين المحلي
    localStorage.setItem('designSettings', JSON.stringify(settings));
    
    // تطبيق الإعدادات
    applyDesignSettings(settings);
    
    alert('تم حفظ إعدادات المظهر بنجاح!');
}

// إعادة تعيين إعدادات المظهر
function resetAppearanceSettings() {
    if (confirm('هل أنت متأكد من إعادة تعيين إعدادات المظهر؟')) {
        localStorage.removeItem('designSettings');
        location.reload();
    }
}

// تبديل عرض العناصر
function toggleElement(elementId) {
    // هنا يمكن إضافة منطق إخفاء/إظهار العناصر
    console.log('تبديل العنصر:', elementId);
}

// تبديل التخطيط من اليمين لليسار
function toggleRTL() {
    const isRTL = document.getElementById('rtlLayout').checked;
    document.body.dir = isRTL ? 'rtl' : 'ltr';
    document.body.style.textAlign = isRTL ? 'right' : 'left';
}

// معاينة الصورة
function previewImage(event, previewId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector(`#${previewId} img`).src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// تحديث جميع المعاينات
function updatePreviews() {
    updateFontSizePreview();
    updateContainerWidthPreview();
    updateSpacingPreview();
    updateBorderRadiusPreview();
    updateShadowPreview();
    updateDesignPreview();
    updateArabicFontPreview();
    updateHeadingArabicFontPreview();
}

// معاينة الخط العربي
function updateArabicFontPreview() {
    const fontFamily = document.getElementById('fontFamily').value;
    const preview = document.getElementById('fontPreviewSample');
    if (preview) {
        preview.style.fontFamily = fontFamily;
    }
}

// معاينة خط العناوين العربي
function updateHeadingArabicFontPreview() {
    const fontFamily = document.getElementById('headingFontFamily').value;
    const preview = document.getElementById('headingFontPreviewSample');
    if (preview) {
        preview.style.fontFamily = fontFamily;
    }
}

// تحميل جدول العيادات
function loadClinicsTable() {
    const tbody = document.getElementById('clinics-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    clinics.forEach((clinic, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${clinic.name}</td>
                <td>${clinic.doctor}</td>
                <td>${clinic.phone}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editClinic(${clinic.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteClinic(${clinic.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// تحرير عيادة
function editClinic(id) {
    const clinic = clinics.find(c => c.id === id);
    if (clinic) {
        document.getElementById('clinicId').value = clinic.id;
        document.getElementById('clinicName').value = clinic.name;
        document.getElementById('doctorSelect').value = clinic.doctorId;
        document.getElementById('clinicPhone').value = clinic.phone;
        document.getElementById('clinicDescription').value = clinic.description || '';
        document.querySelector('#clinicImagePreview img').src = clinic.image;
        openClinicModal();
    }
}

// حذف عيادة
function deleteClinic(id) {
    if (confirm('هل أنت متأكد من حذف هذه العيادة؟')) {
        alert('تم حذف العيادة بنجاح!');
        loadClinicsTable();
    }
}

// فتح نافذة العيادة
function openClinicModal() {
    document.getElementById('clinicModal').style.display = 'block';
}

// إغلاق نافذة العيادة
function closeClinicModal() {
    document.getElementById('clinicModal').style.display = 'none';
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    loadClinics();
    loadClinicsTable();
    
    // إضافة مستمعي الأحداث للتبويبات
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab') || this.textContent.trim();
            switchTab(tabName);
        });
    });
    
    // تحديث المعاينات
    updatePreviews();
});

// تبديل التبويبات
function switchTab(tabName) {
    // إخفاء جميع محتويات التبويب
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // إزالة الفئة النشطة من جميع التبويبات
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // إظهار محتوى التبويب المحدد
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // إضافة الفئة النشطة للتبويب المحدد
    event.target.classList.add('active');
}

// حفظ الإعدادات العامة
function saveGeneralSettings() {
    alert('تم حفظ الإعدادات العامة بنجاح!');
}

// إعادة تعيين الإعدادات العامة
function resetGeneralSettings() {
    if (confirm('هل أنت متأكد من إعادة تعيين الإعدادات العامة؟')) {
        alert('تم إعادة تعيين الإعدادات العامة!');
    }
}