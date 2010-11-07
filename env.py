import thread
import time

class Window:
	def setTimeout(self,fn,delay):
		thread.start_new_thread(lambda:(time.sleep(delay),fn()),())

