module.exports = { 
  exhibitions : getExhibitions
};

function getExhibitions() {
  return [
      {
        "title": "",
        "url" : "",
        "urlTitle" : "",
        "active" : false,
        "date": "",
        "text" : {
            text1: ""
        }
      },
      {
        "title": "Exhibiting in Watercolor USA 2016",
        "url" : "http://www.sgfmuseum.org/182/Watercolor-USA-2016",
        "urlTitle" : "Watercolor USA 2016",
        "active" : true,
        "date": "June 4 to August 28, 2016",
        "text" : {
            text1: "Springfield Art Museum",
            text2: "Springfield, MO"
        }
    },
    {
        "title": "California Water Media",
        "url" : "http://sebarts.org/",
        "urlTitle" : "Sebastopol Center for the Arts",
        "active" : true,
        "date": "January 9 through February 7, 2016",
        "text" : {
            text1: "Sebastopol Center for the Arts",
            text2: "Sebastopol, CA"
        }
    },
    {
        "title": "Retrospective - Viewing Spaces: Drawn, Painted and Installed",
        "url" : "",
        "urlTitle" : "",
        "active" : true,
        "date": "July 23, 2015 through October 8, 2015",
        "text" : {
            text1: "Places/Spaces: Drawn, Painted, Installed",
            text2: "This retrospective exhibition of over 30 works from 1980 to the present includes watercolor paintings from several series - Sky in a Box, Empty Spaces and California. In addition, graphite drawings, pastels and one editioned intaglio print are displayed as well as small studies for larger works. All work is sold with its frame an can be delivered."
        }
    },
    {
        "title": "HUDSON Business Lounge",
        "url" : "http://www.hudson-business-lounge.com/",
        "urlTitle" : "HUDSON Business Lounge",
        "active" : true,
        "date": "",
        "text" : {
            text1: "310 East Buffalo",
            text2: "Milwaukee, WI 53202",
            text3: "The Hudson Business Lounge and Cafe is open:",
            text4: "Monday thru Thursday 8am-9pm",
            text5: "Friday 8am-10pm Saturday 10am-10pm",
            text6: "Sunday closed"
        }
    },
    {
        "title": "Represented at Purloin Studios",
        "url" : "http://www.purloinstudio.com/index.html",
        "urlTitle" : "Purloin Studios",
        "active" : true,
        "date": "",
        "text" : {
            text1: "N88 W16567 Main Street",
            text2: "Menomonee Falls, WI"
        }
    },
    {
        "title": "Gallery of Wisconsin Art's (GOWA) \"Wisconsin Landscape\"",
        "url" : "https://galleryofwisconsinart.com/",
        "urlTitle" : "Gallery of Wisconsin Art",
        "active" : true,
        "date": "Saturday, November 11 form 5-8 pm",
        "text" : {
            text1: "N88 W16567 Main Street",
            text2: "Menomonee Falls, WI",
            text3: "It's a group show with many artists working in the genre.  Work is on display through December 30.  Please visit!"
        }
    }
  ];
}