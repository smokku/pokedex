import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameAggregateFieldsModelBase } from "./PokemonV2GenerationnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameAggregateFieldsModel */
export interface PokemonV2GenerationnameAggregateFieldsModelType extends Instance<typeof PokemonV2GenerationnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameAggregateFieldsModel */
export { selectFromPokemonV2GenerationnameAggregateFields, pokemonV2GenerationnameAggregateFieldsModelPrimitives, PokemonV2GenerationnameAggregateFieldsModelSelector } from "./PokemonV2GenerationnameAggregateFieldsModel.base"

/**
 * PokemonV2GenerationnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_generationname"
 */
export const PokemonV2GenerationnameAggregateFieldsModel = PokemonV2GenerationnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
