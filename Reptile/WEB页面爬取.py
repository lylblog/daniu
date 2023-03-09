from requests_html import HTMLSession

def get_text_link_from_sel(sel):
    mylist = []
    try:
        results = r.html.find(sel)
        for result in results:
            mytext = result.text
#            mylink = list(result.absolute_links)[0]
#            mylist.append((mytext, mylink))
            mylist.append((mytext))
        return mylist
    except:
        return None
if __name__ == '__main__':
    url = 'http://www.lizhi135.com/articles/lizhi-71094.html'
    sel = 'body > div > div > div > div > p'
    session = HTMLSession()
    r = session.get(url)
    data = get_text_link_from_sel(sel)
    print(data)
    d = {"a": "aaa"}
    str = str(data)
    file = open('test.txt','w')
    file.writelines(str)
    file.close
