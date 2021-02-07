# frozen_string_literal: true

module ActivityStreamsHelper
  def add_activitystreams_author(target, person)
    target.author do |author|
      author.name person.name
      author.uri local_or_remote_person_path(person, absolute: true)

      author.tag! "activity:object-type", "https://activitystrea.ms/specs/json/schema/activity-schema.html"
      author.tag! "poco:preferredUsername", person.username
      author.tag! "poco:displayName", person.name
    end
  end
end
