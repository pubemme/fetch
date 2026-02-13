(function () {
	if (startN) return;
    var SIZE = '300x250';

    // file JSON STATICO su jsDelivr
    var DATA_URL = 'https://cdn.jsdelivr.net/gh/pubemme/fetch@88e183a54e34a471ee7b5ed7c0e9421cbb5d6ece/data';

    fetch(DATA_URL, { cache: 'no-store' })
        .then(r => r.json())
        .then(list => {

            if (!Array.isArray(list) || !list.length) return;

            // post random
            var post = list[Math.floor(Math.random() * list.length)];

            if (!post || !post.title) return;

            var container = document.getElementById('n');
            if (!container) return;

			var finalUrl = urlTrack + post.url;
			
			var ctaText = "Vai alla ricetta";
			if (post.category == "Blog") ctaText = "Scopri di più";

            container.innerHTML = render(post, SIZE, finalUrl, ctaText);
        });

    function render(p, size, url, ctaText) {

        var titleStyle = `
            font-size:14px;
            font-weight:bold;
            line-height:1.2;
            overflow:hidden;
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical;
        `;

        var cta = `
            background:#e11111;
            color:#fff;
            padding:6px 10px;
            text-decoration:none;
            font-size:13px;
            white-space:nowrap;
            border-radius:3px;
        `;

        /* ======================
           320x100
        ====================== */
        if (size === '320x100') {
            return `
            <div style="
                display:flex;
                align-items:flex-start;
                gap:8px;
                width:100%;
                height:100px;
                max-height:100px;
                font-family:Arial;
                box-sizing:border-box;
                overflow:hidden;
                padding:6px;
            ">
                <img src="${p.image}" onclick="window.open('${url}','_blank')" style="
                    cursor:pointer;
                    width:64px;
                    height:64px;
                    object-fit:cover;
                    flex-shrink:0;
                    display:block;
                ">
                <div style="
                    display:flex;
                    flex-direction:column;
                    gap:4px;
                    flex:1;
                    min-width:0;
                    overflow:hidden;
                ">
                    <div onclick="window.open('${url}','_blank')" style="
                        font-size:12px;
                        font-weight:bold;
                        line-height:1.15;
                        overflow:hidden;
                        display:-webkit-box;
                        -webkit-line-clamp:2;
                        -webkit-box-orient:vertical;
                        cursor:pointer;
                    ">
                        ${p.title}
                    </div>
                    <a href="${url}" target="_blank" style="
                        background:#e11111;
                        color:#fff;
                        padding:3px 6px;
                        text-decoration:none;
                        font-size:11px;
                        border-radius:3px;
                        align-self:flex-start;
                        white-space:nowrap;
                    ">
                        ${ctaText}
                    </a>
                </div>
            </div>`;
        }

        /* ======================
           300x250
        ====================== */
        return `
        <div style="
            display:flex;
            flex-direction:column;
            gap:8px;
            width:100%;
            height:100%;
            font-family:Arial;
            box-sizing:border-box;
        ">
            <img src="${p.image}" onclick="window.open('${url}','_blank')" style="
                cursor:pointer;
                width:100%;
                max-height:140px;
                object-fit:cover;
            ">
            <div onclick="window.open('${url}','_blank')" style="${titleStyle} cursor:pointer;">
                ${p.title}
            </div>
            <a href="${url}" target="_blank" style="${cta}">
                ${ctaText}
            </a>
        </div>`;
    }

})();
