---
title: {{title}}
slug: {{slug}}
date: {{date_published}}
updated: {{date_updated}}
tags:
{% for tag in tags %}- {{tag}}
{% endfor %}{% if draft %}
draft: true{% endif %}
---

