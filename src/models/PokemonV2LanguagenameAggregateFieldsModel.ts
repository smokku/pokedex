import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameAggregateFieldsModelBase } from "./PokemonV2LanguagenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameAggregateFieldsModel */
export interface PokemonV2LanguagenameAggregateFieldsModelType extends Instance<typeof PokemonV2LanguagenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameAggregateFieldsModel */
export { selectFromPokemonV2LanguagenameAggregateFields, pokemonV2LanguagenameAggregateFieldsModelPrimitives, PokemonV2LanguagenameAggregateFieldsModelSelector } from "./PokemonV2LanguagenameAggregateFieldsModel.base"

/**
 * PokemonV2LanguagenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_languagename"
 */
export const PokemonV2LanguagenameAggregateFieldsModel = PokemonV2LanguagenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
