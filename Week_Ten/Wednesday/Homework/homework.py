# Below is the code from today's live code. Use it for a reference in part one of the homework.
# For your homework tonight:
# 1. Make your own model of something real. There should be some inheritence going on. It should not be fruit or trees, but something similarly easy to model. Some ideas:
#     - Lawns with buses and grass
#     - A music room with a few types of instruments
#     - A sports team with players
# 2. Take a look around the Django Docs. Give yourself an hour and just learn as much as you can! https://docs.djangoproject.com/en/2.0/


import random

class OrangeTree():
	def __init__(self, type):
		self.oranges = []
		self.type = type
		self.growOranges()
		print("You created a {} tree with {} oranges".format(self.type, len(self.oranges)))

	def pick(self):
		orange = self.oranges.pop()
		print("You picked an {} orange {} in diameter and {} out of ten ripeness".format(self.type, orange.diameter, orange.ripeness))
		return orange

	def growOranges(self):
		for num in range(1,100):
			diameter = random.randint(3,8) #get random num between 3-8
			ripeness = random.randint(1,10) #get random ripeness 1-10
			if self.type == 'navel':
				orange = NavelOrange(diameter, ripeness)
			elif self.type == 'valencia':
				orange = ValenciaOrange(diameter, ripeness)
			else:
				orange = Orange(diameter, ripeness)
			self.oranges.append(orange)

	def request_maintenence(self):
		Request().maintenance(self.__class__.__name__)



class Orange():
	def __init__(self, diameter, ripeness):
		self.diameter = diameter
		self.ripeness = ripeness
		self.zested = False
		# print("you created an Orange {} in diameter and {} out of ten ripeness".format(self.diameter, self.ripeness))

	def ripen(self):
		self.ripeness += 1
		print("ripeness is now {}".format(self.ripeness))

	def zest(self):
		if(not self.zested):
			self.zested = True
			print("OHHH ZESTY")

class ValenciaOrange(Orange):
	def __init__(self, diameter, ripeness):
		Orange.__init__(self, diameter, ripeness)

	def juice(self):
		print("JUICY!")
		return "this is juice"

class NavelOrange(Orange):
	def __init__(self, diameter, ripeness):
		Orange.__init__(self, diameter, ripeness)


	def remove_lint(self):
		print("gross.")
		return("this is lint")


class Orchard():
	def __init__(self):
		self.trees = []
		for num in range(1,100):
			if num % 2 == 0:
				tree = OrangeTree("navel")
			else:
				tree = OrangeTree("valencia")
			self.trees.append(tree)
		print(len(self.trees))

	def request_maintenence(self):
		Request().maintenance(self.__class__.__name__)

class Request():

	def maintenance(self, type):
		print("Requesting mainenance for {}".format(type))





myOrchard = Orchard()

myOrchard.request_maintenence()
myOrchard.trees[0].request_maintenence()

myBasket = []

myBasket.append(myOrchard.trees[0].pick())


for orange in myBasket:
	orange.zest()
