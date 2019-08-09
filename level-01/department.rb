class Department
	attr_accessor :deptname , :sections, :studentslist
	def initialize(name)
		self.deptname=name
		self.sections={'A'=>3,'B'=>3,'C'=>3}
		self.studentslist={}
	end
	def show
		puts self.deptname
	end

	def show_details
		#studentslist=studentslist.sort_by { |key, val| key }
		#studentslist=studentslist.sort_by { |key, val| key }
		#studentslist.keys.sort.each { |ke,val| }
		#studentslist.keys.sort

		studentslist.each do |key,val|
			puts "#{key} has roll no #{val}"
		end
		#for student in self.studentslist:
		#		puts student[]
      		#puts "Student #{ke} with roll no #{value}"
    	#end
	end

	def get_details(stud_name)
		studentslist[stud_name]
	end

	def get_name
		deptname
	end

	def add_rollno(stud_name,rollno)
		studentslist[stud_name]=rollno
		puts studentslist[stud_name]
	end		

	def remove_rollno(stud_name)
		studentslist.delete(stud_name)
	end

	def get_seats_in_section(section)
		 self.sections[section] 
	end

	def get_specific_section_rollno(section)
		sect=3-self.sections[section]+1
		sect=section+sect.to_s
		self.sections[section]=self.sections[section]-1
		return sect
	end

	def get_section
		if self.sections['A'] >= 1
			sect=3-self.sections["A"]+1
			sect='A'+sect.to_s
			self.sections['A']=self.sections['A']-1
		elsif self.sections['B'] >=1
			sect=3-self.sections["B"]+1
			sect='B'+sect.to_s
			self.sections['B']=self.sections['B']-1
		elsif self.sections['C'] >= 1
			sect=3-self.sections["C"]+1
			sect='C'+sect.to_s
			self.sections['C']=self.sections['C']-1			
		else
			sect=0
		end
		return sect
	end

end


