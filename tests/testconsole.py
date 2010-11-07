import code
#code.interact(readfunc=lambda x: str(x) + "foo")
ic = code.InteractiveConsole()

ri = ic.raw_input(">>> ")
while ri:
	print(ri)
	ri = ic.raw_input(">>> ")
