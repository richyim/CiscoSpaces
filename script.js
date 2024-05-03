window.addEventListener('DOMContentLoaded', () => {
  const regionDropdown = document.getElementById('regionDropdown');
  const citySelect = document.getElementById('citySelect');
  const cityOptions = document.getElementById('cityOptions');
  const linkButton = document.getElementById('linkButton');
  const hoverSound = new Audio('click.wav'); // Ensure the path to your sound file is correct

  // Map of regions to their corresponding cities with short names
  const regionsWithCities = {
    'APJC': [
      'BGL17',
      'BNG02',
      'HKG1',
      'MEL03',
      'MMB12',
      'PEN3',
      'SNG15',
      'SOL2',
      'NSD5',
      'TKY7'
    ],
    'EMEA': [
      'AMS5',
      'BRC2',
      'BDLK09',
      'BDLK10',
      'BDLK11',
      'CPH06',
      'DBI03',
      'DLF1',
      'FKF3',
      'PAR03',
      'STK03',
      'WLSN01'
    ],
    'US': [
      'ATL11',
      'BJN6',
      'BGT2',
      'BUA2',
      'CHG12',
      'MXC12',
      'NYC1',
      'SFO12',
      'SJC10',
      'SJC11',
      'SJC24',
      'SJOCR02',
      'SPL1',
      'TRN6'
    ]
  };

  // Event listener for region options
  document.querySelectorAll('#regionOptions div').forEach(item => {
    item.addEventListener('click', (event) => {
      const region = event.target.dataset.value;
      regionDropdown.querySelector('.dropbtn').textContent = event.target.textContent;
      updateCityOptions(region);
//      cityOptions.style.display = 'none'; // Close the dropdown
      regionOptions.style.display = 'none'; // Close the region dropdown

    });
  });


 // Mouseover event for region dropdown
  regionDropdown.addEventListener('mouseenter', () => {
    regionOptions.style.display = 'block';
  });

  // Mouseout event for region dropdown
  regionDropdown.addEventListener('mouseleave', () => {
    regionOptions.style.display = 'none';
  });


  // Function to update city options based on selected region
  function updateCityOptions(region) {
    citySelect.textContent = 'Select a city';
    cityOptions.innerHTML = ''; // Clear existing city options

    const cities = regionsWithCities[region] || [];

    cities.forEach(city => {
      const div = document.createElement('div');
      div.textContent = city;
      div.addEventListener('click', () => {
        citySelect.textContent = city;
        updateLinkButton(city);
        cityOptions.style.display = 'none'; // Close the dropdown
      });
      div.addEventListener('mouseenter', playHoverSound); // Add hover sound
      cityOptions.appendChild(div);
    });
  }

  // Function to update link button with selected city
function updateLinkButton(city) {
    const links = {
      'AMS5': 'https://workspaces.dnaspaces.eu/#/preview/?token=cb3c8ae0-7267-4db4-831a-9b90515da1ad',
      'ATL11': 'https://workspaces.dnaspaces.io/#/preview/?token=e1439ffd-2c04-4896-b172-9106bc92d5cf',
      'BRC2': 'https://workspaces.dnaspaces.eu/#/preview/?token=03a5ac8d-73b5-47f5-83a5-fe52b48aec82',
      'BGL17': 'https://workspaces.dnaspaces.io/#/preview/?token=ecc4de83-ae3c-48bb-9165-3990e0db3599%23/dashboard',
      'BNG02': 'https://workspaces.ciscospaces.sg/?token=0adb1014-4113-4521-ab29-631e168dc783#',
      'BDLK09': 'https://workspaces.dnaspaces.io/#/preview/?token=d22a4b82-4ba4-4ca3-bf71-cb380a9f37dc',
      'BDLK10': 'https://workspaces.dnaspaces.eu/#/preview/?token=c5e854e0-71ae-43c6-ac0b-6aafce0a4a22',
      'BDLK11': 'https://workspaces.dnaspaces.eu/#/preview/?token=c09d978e-54ab-47fa-aad8-9f46a2286209',
      'BGT2': 'https://workspaces.dnaspaces.io/#/preview/?token=6e330188-71a5-41ef-b62c-a56837e31c07',
      'BJN6': 'https://workspaces.dnaspaces.io/#/preview/?token=c839471c-ca81-4e68-bd13-f08df2ddf35e',
      'BUA2': 'https://workspaces.dnaspaces.io/#/preview/?token=2bfe0a47-9742-4b82-bf62-00760c9ed95b',
      'CHG12': 'https://workspaces.dnaspaces.io/#/preview/?token=b6e035cd-b420-41e1-ab7b-8003a47d4f48',
      'CPH06': 'https://workspaces.dnaspaces.io/#/preview/?token=be677256-b287-4ef9-b04e-19d1862363ae',
      'DBI03': 'https://workspaces.dnaspaces.eu/#/preview/?token=acc71d6a-b1a1-49bf-b651-16753860abc2',
      'DLF1': 'https://workspaces.dnaspaces.eu/#/preview/?token=036e3465-ad44-4bee-b1b1-7b185d8fedaa',
      'FKF3': 'https://workspaces.dnaspaces.eu/#/preview/?token=9ae181a1-28fc-49fc-b88e-7b61b5e312c3',
      'GWY03': 'https://workspaces.dnaspaces.eu/#/preview/?token=f2187abc-578a-46cd-bf97-9ed447c34a32',
      'HKG1': 'https://workspaces.ciscospaces.sg/?token=821e4eb0-48bb-4fa0-b225-3f9e36677372#',
      'LYS01': 'https://workspaces.dnaspaces.eu/#/preview/?token=469418e5-989b-4f2a-baa9-5e35c0b5efd7',
      'MDR1': 'https://workspaces.dnaspaces.eu/#/preview/?token=407bdb48-05ee-44a0-a873-21542b3cc893%23/dashboard',
      'MEL03': 'https://workspaces.ciscospaces.sg/?token=adfbe985-8f4d-4be5-aea3-344e3fc80043#',
      'MXC12': 'https://workspaces.dnaspaces.io/#/preview/?token=918da515-7d7e-4898-a461-dc7c68c52f25',
      'MMB12': 'https://workspaces.ciscospaces.sg/?token=e479a206-ed52-4c98-9d33-ad91fcdc413c#',
      'MUC07': 'https://workspaces.dnaspaces.eu/#/preview/?token=fd769468-28cf-40e8-b2ad-1eac6caca4d8',
      'NYC1': 'https://workspaces.dnaspaces.io/#/preview/?token=fdf320ef-1aae-4479-b638-3dd823f9e4bb&dl=-73.99224231912669%2c40.75131896479391&ra=1.57%2c4.2%2c0',
      'NSD5': 'https://workspaces.dnaspaces.io/#/preview/?token=7926618f-9a33-47ba-b2da-7cfd33207d62',
      'NUE01': 'https://workspaces.dnaspaces.eu/#/preview/?token=49270620-1e81-40a2-97bd-bd870c869027',
      'PAR03': 'https://workspaces.dnaspaces.eu/#/preview/?token=0624d781-f78f-4f94-8807-a50cb1c599eb',
      'PEN3': 'https://workspaces.ciscospaces.sg/?token=c8063adb-8e1e-4fd3-a615-5e1809ae5f30#',
      'RCDN5': 'https://workspaces.dnaspaces.io/#/preview/?token=1a20d588-4db4-4b36-a1da-45ad5bf5fbd5#',
      'RCDN6': 'https://workspaces.dnaspaces.io/#/preview/?token=b394ddf0-b22f-40a6-a1be-257fc2085684',
      'RTP10': 'https://workspaces.dnaspaces.io/#/preview/?token=76ba0d22-d195-4557-80d0-13b235a36cc0',
      'RTP11': 'https://workspaces.dnaspaces.io/#/preview/?token=5272918b-76d4-4d73-8944-6f545a849d7f',
      'RTP7V': 'https://workspaces.dnaspaces.io/?token=b73f1c93-8527-41db-afaa-a1cfc9e394df#',
      'RTP8M': 'https://workspaces.dnaspaces.io/?token=ca7880af-b145-4460-9b8e-2772818867ab#',
      'RTP9R': 'https://workspaces.dnaspaces.io/?token=e96e6f61-c5b6-4e25-8fbf-cc0eb4a1bc65#',
      'SFO12': 'https://workspaces.dnaspaces.io/#/preview/?token=2282e93f-f782-4958-aa09-0c33e6831aa3&b=270&p=60&z=20&dl=-122.38725154249516%2c37.77045962591586&ra=1.3%2c-1.4%2c-.2',
      'SJOCR02': 'https://workspaces.dnaspaces.io/#/preview/?token=32399df5-a2dd-45f5-bcb5-17ced4664594',
      'SPL1': 'https://workspaces.dnaspaces.io/#/preview/?token=1833f017-3488-4c22-9f51-5c1081a462a9',
      'SOL2': 'https://workspaces.ciscospaces.sg/?token=d2f3ddff-e1af-475c-a03b-7c0bea4e3f71#',
      'SNG15': 'https://workspaces.ciscospaces.sg/?token=27c9dd61-b95a-4523-9bb1-f254c3ab48bc#',
      'SJC10': 'https://workspaces.dnaspaces.io/?token=8d2540ce-740e-4f26-ba6d-3fc0dcf3329d#',
      'SJC11': 'https://workspaces.dnaspaces.io/?token=8b77632d-d2e2-4d5b-84c3-f41134451696#',
      'SJC24': 'https://workspaces.dnaspaces.io/#/preview/?token=1b9fed10-f723-4d42-a029-ebc94536bec9',
      'STK03': 'https://workspaces.dnaspaces.eu/?token=0a40dbf2-4fe0-4e5e-a6ed-56ec234d3569#',
      'TKY7': 'https://workspaces.ciscospaces.sg/#/preview/?token=75bd53df-d8f3-4b98-b377-1955b6e15a3d',
      'TRN6': 'https://workspaces.dnaspaces.io/#/preview/?token=7b4012d6-0e41-430f-9e78-ecd33fefac0e',
      'WLSN01': 'https://workspaces.dnaspaces.eu/?token=e01c04d3-f7cf-42f0-a073-59253e84fa5b#'
      // Add all other city mappings here in the same format
      // 'CityCode': 'CityURL',
    };

    let link = links[city] || 'https://www.cisco.com';
    linkButton.href = link;
    linkButton.target = '_blank';
  }


  // Toggle city dropdown on click
  citySelect.addEventListener('click', () => {
    cityOptions.style.display = cityOptions.style.display === 'none' ? 'block' : 'none';
  });

  // Hide city dropdown when clicking elsewhere on the page
  document.addEventListener('click', (event) => {
    if (!citySelect.contains(event.target) && !regionDropdown.contains(event.target)) {
      cityOptions.style.display = 'none';
    }
   if (!regionDropdown.contains(event.target) && !regionOptions.contains(event.target)) {
      regionOptions.style.display = 'none';
    }
  });

  // Function to play hover sound
  function playHoverSound() {
    if (hoverSound.paused) {
      hoverSound.currentTime = 0; // Rewind to the start
      hoverSound.play();
    }
  }
});
