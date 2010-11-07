import spidermonkey
rt = spidermonkey.Runtime()
cx = rt.new_context()
func = cx.execute('function(val) {return "whoosh: " + val;}')
x=func("zipper!");
print(x)
