
/*
let iframe = document.getElementById('iframe');
function loadLinkInIframe(link) {
    iframe.src = link;
}
        let linkSelector = document.getElementById('linkSelector');
        linkSelector.addEventListener('click', () => {
            let selectedLink = linkSelector.value;
            loadLinkInIframe(selectedLink);
        });

        let linkSelecto = document.getElementById('linkSelecto');
        linkSelecto.addEventListener('click', () => {
            let selectedLink = linkSelecto.value;
            loadLinkInIframe(selectedLink);
        });
        let linkSelector2 = document.getElementById('linkSelector2');

        linkSelector2.addEventListener('click', () => {
            let selectedLink = linkSelector2.value;
            loadLinkInIframe(selectedLink);
        });

        
        let linkSelector3 = document.getElementById('linkSelector3');

        linkSelector3.addEventListener('click', () => {
            let selectedLink = linkSelector3.value;
            loadLinkInIframe(selectedLink);
        });

       
        let linkSelector4 = document.getElementById('linkSelector4');

        linkSelector4.addEventListener('click', () => {
            let selectedLink = linkSelector4.value;
            loadLinkInIframe(selectedLink);
        });

        
        let linkSelector5 = document.getElementById('linkSelector5');

        linkSelector5.addEventListener('click', () => {
            let selectedLink = linkSelector5.value;
            loadLinkInIframe(selectedLink);
        });

        
        let linkSelector6 = document.getElementById('linkSelector6');

        linkSelector6.addEventListener('click', () => {
            let selectedLink = linkSelector6.value;
            loadLinkInIframe(selectedLink);
        });

        
        let linkSelector7 = document.getElementById('linkSelector7');

        linkSelector7.addEventListener('click', () => {
            let selectedLink = linkSelector7.value;
            loadLinkInIframe(selectedLink);
        });

        
        let linkSelector8 = document.getElementById('linkSelector8');

        linkSelector8.addEventListener('click', () => {
            let selectedLink = linkSelector8.value;
            loadLinkInIframe(selectedLink);
        });

        
        let linkSelector9 = document.getElementById('linkSelector9');

        linkSelector9.addEventListener('click', () => {
            let selectedLink = linkSelector9.value;
            loadLinkInIframe(selectedLink);
        });

      
        let iframe = document.getElementById('iframe');
let linkSelectors = document.querySelectorAll('.linkSelector');

linkSelectors.forEach(linkSelector => {
  linkSelector.addEventListener('click', () => {
    let selectedLink = linkSelector.getAttribute('data-link');
    loadLinkInIframe(selectedLink);
  });
});

function loadLinkInIframe(link) {
  iframe.src = link;
}
 */


let iframe = document.getElementById('iframe');
    function loadLinkInIframe(link) {
        iframe.src = link;
    }
    function searchProgram() {
    let searchInput = document.getElementById('search-input').value;

    // Program names and their corresponding links
    const programLinks = {
        'Program 01': 'Arrays/Arr1.html',
        'Program 02': 'Arrays/Arr2.html',
        'Program 3': 'Arrays/Arr3.html',
        'Program 4': 'Arrays/Arr4.html',
        'Program 5': 'Arrays/Arr5.html',
        'Program 6': 'Arrays/Arr6.html',
        'Program 7': 'Arrays/Arr7.html',
        'Program 8': 'Arrays/Arr8.html',
        'Program 9': 'Arrays/Arr9.html',
        'Program 10':'Arrays/Arr10.html',
        'Program 11':'Arrays/Arr11.html',
        'Program 12':'Arrays/Arr12.html',
        'Program 13':'Arrays/Arr13.html',
        'Program 14':'Arrays/Arr14.html',
        'Program 15':'Arrays/Arr15.html',
        'Program 16':'Arrays/Arr16.html',
        'Program 17':'Arrays/Arr17.html',
        'Program 18':'Arrays/Arr18.html',
        'Program 19':'Arrays/Arr19.html',
        'Program 20':'Arrays/Arr20.html',
        '2dProgram 01':'2DArray/Arr1.html',
        '2dProgram 02':'2DArray/Arr2.html',
        '2dProgram 3': '2DArray/Arr3.html',
        '2dProgram 4': '2DArray/Arr4.html',
        '2dProgram 5': '2DArray/Arr5.html',
        '2dProgram 6': '2DArray/Arr6.html',
        '2dProgram 7': '2DArray/Arr7.html',
        'strProgram 01':'String/str1.html',
        'strProgram 02':'String/str2.html',
        'strProgram 3': 'String/str3.html',
        'strProgram 4': 'String/str4.html',
        'strProgram 5': 'String/str5.html',
        'strProgram 6': 'String/str6.html',
        'strProgram 7': 'String/str7.html',
        'strProgram 8': 'String/str8.html',
        'strProgram 9': 'String/str9.html',
        'strProgram 10':'String/str10.html',
        'strProgram 11':'String/str11.html',
        'strProgram 12':'String/str12.html',
        'strProgram 13':'String/str13.html',
        'strProgram 14':'String/str14.html',
        'strProgram 15':'String/str15.html',
        'strProgram 16':'String/str16.html',
        'strProgram 17':'String/str17.html',
        'strProgram 18':'String/str18.html',
        'strProgram 19':'String/str19.html',
        'strProgram 20':'String/str20.html',
        'strProgram 21':'String/str21.html',
        'strProgram 22':'String/str22.html',
        'strProgram 23':'String/str23.html',
        'strProgram 24':'String/str24.html',
        'strProgram 25':'String/str25.html',
        'strProgram 26':'String/str26.html',
        'strProgram 27':'String/str27.html',
        'strProgram 28':'String/str28.html',
        'strProgram 29':'String/str29.html',
        'stkProgram 01':'Stack/Stack1.html',
        'stkProgram 02':'Stack/Stack2.html',
        'stkProgram 3': 'Stack/Stack3.html',
        'stkProgram 4': 'Stack/Stack4.html',
        'stkProgram 5': 'Stack/Stack5.html',
        'stkProgram 6': 'Stack/Stack6.html',
        'stkProgram 7': 'Stack/Stack7.html',
        'stkProgram 8': 'Stack/Stack8.html',
        'stkProgram 9': 'Stack/Stack9.html',
        'stkProgram 10':'Stack/Stack10.html',
        'stkProgram 11':'Stack/Stack11.html',
        'stkProgram 12':'Stack/Stack12.html',
        'stkProgram 13':'Stack/Stack13.html',
        'QueProgram 01':'Queue/Queue1.html',
        'QueProgram 02':'Queue/Queue2.html',
        'QueProgram 3': 'Queue/Queue3.html',
        'QueProgram 4': 'Queue/Queue4.html',
        'QueProgram 5': 'Queue/Queue5.html',
        'QueProgram 6': 'Queue/Queue6.html',
        'QueProgram 7': 'Queue/Queue7.html',
        'QueProgram 8': 'Queue/Queue8.html',
        'QueProgram 9': 'Queue/Queue9.html',
        'QueProgram 10':'Queue/Queue10.html',
        'QueProgram 11':'Queue/Queue11.html',
        'QueProgram 12':'Queue/Queue12.html',
        'QueProgram 13':'Queue/Queue13.html',
        'LLProgram 01':'LinkList/Link1.html',
        'LLProgram 02':'LinkList/Link2.html',
        'LLProgram 3': 'LinkList/Link3.html',
        'LLProgram 4': 'LinkList/Link4.html',
        'LLProgram 5': 'LinkList/Link5.html',
        'LLProgram 6': 'LinkList/Link6.html',
        'LLProgram 7': 'LinkList/Link7.html',
        'LLProgram 8': 'LinkList/Link8.html',
        'LLProgram 9': 'LinkList/Link9.html',
        'LLProgram 10':'LinkList/Link10.html',
        'LLProgram 11':'LinkList/Link11.html',
        'RecurProgram 01':'Recursion/Recursion (1).html',
        'RecurProgram 02':'Recursion/Recursion (2).html',
        'RecurProgram 3': 'Recursion/Recursion (3).html',
        'RecurProgram 4': 'Recursion/Recursion (4).html',
        'RecurProgram 5': 'Recursion/Recursion (5).html',
        'RecurProgram 6': 'Recursion/Recursion (6).html',
        'RecurProgram 7': 'Recursion/Recursion (7).html',
        'RecurProgram 8': 'Recursion/Recursion (8).html',
        
        

        // Add more program links here
    };

    const datalist = document.getElementById('program-list');
    datalist.innerHTML = ''; // Clear the datalist

    // Check if the searchInput matches any program name and populate the datalist.
    for (const programName in programLinks) {
        if (programName.toLowerCase().includes(searchInput.toLowerCase())) {
            const option = document.createElement('option');
            option.value = programName;
            datalist.appendChild(option);
        }
    }

    // If there are no matches, handle the case.
    if (datalist.children.length === 0) {
        alert('No matching programs found');
    } else if (datalist.children.length === 1) {
        // Automatically select the only matching program if there's only one.
        const selectedProgram = datalist.children[0].value;
        const selectedLink = programLinks[selectedProgram];
        loadLinkInIframe(selectedLink);
    }
}
    
/*function searchProgram() {
    let searchInput = document.getElementById('search-input').value;
    // Perform your search logic here and get the link to display in the iframe.
    // For example, you can use a switch statement or an object with program links.
    let programLinks = {
        'Program 1': 'Arrays/Arr1.html',
        'Program 2': 'Arrays/Arr2.html',
        'Program 3': 'Arrays/Arr3.html',
        'Program 4': 'Arrays/Arr4.html',
        'Program 5': 'Arrays/Arr5.html',
        'Program 6': 'Arrays/Arr6.html',
        'Program 7': 'Arrays/Arr7.html',
        'Program 8': 'Arrays/Arr8.html',
        'Program 9': 'Arrays/Arr9.html',
        'Program 10':'Arrays/Arr10.html',
        'Program 11':'Arrays/Arr11.html',
        'Program 12':'Arrays/Arr12.html',
        'Program 12':'Arrays/Arr13.html',
        'Program 14':'Arrays/Arr14.html',
        'Program 15':'Arrays/Arr15.html',
        'Program 16':'Arrays/Arr16.html',
        'Program 17':'Arrays/Arr17.html',
        'Program 18':'Arrays/Arr18.html',
        'Program 19':'Arrays/Arr19.html',
        'Program 20':'Arrays/Arr20.html',

        // Add more program links here
    };
    
    // Check if the searchInput matches any program name.
    for (const programName in programLinks) {
        if (programName.includes(searchInput)) {
            let selectedLink = programLinks[programName];
            loadLinkInIframe(selectedLink);
            return; // Exit the loop when a match is found
        }
    }

    // Handle the case where the program is not found.
    alert('Program not found');
}
*/
            let linkSelector = document.getElementById('linkSelector');
            linkSelector.addEventListener('click', () => {
                let selectedLink = linkSelector.value;
                loadLinkInIframe(selectedLink);
            });
    
            let linkSelecto = document.getElementById('linkSelecto');
            linkSelecto.addEventListener('click', () => {
                let selectedLink = linkSelecto.value;
                loadLinkInIframe(selectedLink);
            });
            let linkSelector2 = document.getElementById('linkSelector2');
    
            linkSelector2.addEventListener('click', () => {
                let selectedLink = linkSelector2.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector3 = document.getElementById('linkSelector3');
    
            linkSelector3.addEventListener('click', () => {
                let selectedLink = linkSelector3.value;
                loadLinkInIframe(selectedLink);
            });
    
           
            let linkSelector4 = document.getElementById('linkSelector4');
    
            linkSelector4.addEventListener('click', () => {
                let selectedLink = linkSelector4.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector5 = document.getElementById('linkSelector5');
    
            linkSelector5.addEventListener('click', () => {
                let selectedLink = linkSelector5.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector6 = document.getElementById('linkSelector6');
    
            linkSelector6.addEventListener('click', () => {
                let selectedLink = linkSelector6.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector7 = document.getElementById('linkSelector7');
    
            linkSelector7.addEventListener('click', () => {
                let selectedLink = linkSelector7.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector8 = document.getElementById('linkSelector8');
    
            linkSelector8.addEventListener('click', () => {
                let selectedLink = linkSelector8.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector9 = document.getElementById('linkSelector9');
    
            linkSelector9.addEventListener('click', () => {
                let selectedLink = linkSelector9.value;
                loadLinkInIframe(selectedLink);
            });
        
        function countProgramLinks() {
    const linkSelectors = document.querySelectorAll('.op');
    linkSelectors.forEach((selector, index) => {
        const options = selector.querySelectorAll('option');
        const linkCount = options.length;
        console.log(`Category ${index + 1}: ${linkCount} program links`);
    });
}
countProgramLinks();
function countTotalProgramLinks() {
    const linkSelectors = document.querySelectorAll('.op');
    let totalLinkCount = 0;
    
    linkSelectors.forEach((selector) => {
        const options = selector.querySelectorAll('option');
        const linkCount = options.length;
        totalLinkCount += linkCount;
    });
    
    console.log(`Total number of program links: ${totalLinkCount}`);
}

// Call the function to count the total program links
countTotalProgramLinks();