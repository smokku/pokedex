import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameAggregateFieldsModelBase } from "./PokemonV2AbilitynameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameAggregateFieldsModel */
export interface PokemonV2AbilitynameAggregateFieldsModelType extends Instance<typeof PokemonV2AbilitynameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameAggregateFieldsModel */
export { selectFromPokemonV2AbilitynameAggregateFields, pokemonV2AbilitynameAggregateFieldsModelPrimitives, PokemonV2AbilitynameAggregateFieldsModelSelector } from "./PokemonV2AbilitynameAggregateFieldsModel.base"

/**
 * PokemonV2AbilitynameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_abilityname"
 */
export const PokemonV2AbilitynameAggregateFieldsModel = PokemonV2AbilitynameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
