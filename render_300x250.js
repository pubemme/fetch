(function () {

    var SIZE = '300x250';

    fetch('https://adtech.vivimedia.it/test/gen_html/get_data.php', { cache: 'no-store' })
        .then(r => r.json())
        .then(post => {

            if (!post || !post.title) return;

            var container = document.getElementById('native');
            if (!container) return;
			
			var url = urlTrack+post.url;

            container.innerHTML = render(post, SIZE,url);
        });

    function render(p, size, url) {

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
		
        var cta_c = `width: 100%;`;

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
				<img onclick="window.open('${url}','_blank')" src="${p.image}" style="
					cursor: pointer;
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
						cursor: pointer; 
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
						Vai alla ricetta
					</a>
				</div>
			</div>`;
		}

        return `
        <div style="display:flex;flex-direction:column;gap:8px;width:100%;height:100%;font-family:Arial">
            <img onclick="window.open('${url}','_blank')" src="${p.image}" style="cursor: pointer; width:100%;max-height:140px;object-fit:cover">
            <div onclick="window.open('${url}','_blank')" style="${titleStyle} cursor: pointer;">${p.title}</div>
            <a href="${url}" target="_blank" style="${cta}">Vai alla ricetta</a>
        </div>`;
    }

})();
