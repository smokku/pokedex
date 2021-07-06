import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaAggregateFieldsModelBase } from "./PokemonV2LocationareaAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaAggregateFieldsModel */
export interface PokemonV2LocationareaAggregateFieldsModelType extends Instance<typeof PokemonV2LocationareaAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaAggregateFieldsModel */
export { selectFromPokemonV2LocationareaAggregateFields, pokemonV2LocationareaAggregateFieldsModelPrimitives, PokemonV2LocationareaAggregateFieldsModelSelector } from "./PokemonV2LocationareaAggregateFieldsModel.base"

/**
 * PokemonV2LocationareaAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_locationarea"
 */
export const PokemonV2LocationareaAggregateFieldsModel = PokemonV2LocationareaAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
