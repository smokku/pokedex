import { Instance } from "mobx-state-tree"
import { PokemonV2VersionAggregateFieldsModelBase } from "./PokemonV2VersionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionAggregateFieldsModel */
export interface PokemonV2VersionAggregateFieldsModelType extends Instance<typeof PokemonV2VersionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionAggregateFieldsModel */
export { selectFromPokemonV2VersionAggregateFields, pokemonV2VersionAggregateFieldsModelPrimitives, PokemonV2VersionAggregateFieldsModelSelector } from "./PokemonV2VersionAggregateFieldsModel.base"

/**
 * PokemonV2VersionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_version"
 */
export const PokemonV2VersionAggregateFieldsModel = PokemonV2VersionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
