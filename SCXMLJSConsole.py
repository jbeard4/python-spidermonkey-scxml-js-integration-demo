# Copyright 2009 Paul J. Davis <paul.joseph.davis@gmail.com>
#
# This file is part of the python-spidermonkey package released
# under the MIT license.
import spidermonkey
import sys
from env import Window
import code

if __name__ == "__main__":

	rt = spidermonkey.Runtime()
	cx = rt.new_context()

	window = Window()

	#expose window.setTimeout on the context
	cx.add_global("window", window)

	jsSCXMLFile = open(sys.argv[1])
	jsString = jsSCXMLFile.read()
	jsSCXMLFile.close()

	cx.execute(jsString)

	#create a factory so we can actually instantiate statecharts and expose them to python
	scFactory = cx.execute("""
		function(){
			return new StatechartExecutionContext();
		}
	""")

	#instantiate statechart
	scInstance = scFactory(); 

	#initialize him
	scInstance.initialize()

	cc = scInstance.getCurrentConfiguration();

	ic = code.InteractiveConsole()

	#TODO: set current configuration as prompt
	ri = ic.raw_input("[%s] >>> " % str(cc))
	while ri:
		#cc = scInstance.GEN(ri) #FIXME: able to use reflection here so as to access synchronous API?
		try:
			getattr(scInstance,ri.strip())()
		except:
			print("Error sending event. Maybe it doesn't exist?")
		cc = scInstance.getCurrentConfiguration()
		ri = ic.raw_input("[%s] >>> " % str(cc))
