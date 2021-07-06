import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameAggregateFieldsModelBase } from "./PokemonV2NaturenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameAggregateFieldsModel */
export interface PokemonV2NaturenameAggregateFieldsModelType extends Instance<typeof PokemonV2NaturenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameAggregateFieldsModel */
export { selectFromPokemonV2NaturenameAggregateFields, pokemonV2NaturenameAggregateFieldsModelPrimitives, PokemonV2NaturenameAggregateFieldsModelSelector } from "./PokemonV2NaturenameAggregateFieldsModel.base"

/**
 * PokemonV2NaturenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_naturename"
 */
export const PokemonV2NaturenameAggregateFieldsModel = PokemonV2NaturenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
