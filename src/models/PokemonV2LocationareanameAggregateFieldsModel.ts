import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameAggregateFieldsModelBase } from "./PokemonV2LocationareanameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameAggregateFieldsModel */
export interface PokemonV2LocationareanameAggregateFieldsModelType extends Instance<typeof PokemonV2LocationareanameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameAggregateFieldsModel */
export { selectFromPokemonV2LocationareanameAggregateFields, pokemonV2LocationareanameAggregateFieldsModelPrimitives, PokemonV2LocationareanameAggregateFieldsModelSelector } from "./PokemonV2LocationareanameAggregateFieldsModel.base"

/**
 * PokemonV2LocationareanameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_locationareaname"
 */
export const PokemonV2LocationareanameAggregateFieldsModel = PokemonV2LocationareanameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
