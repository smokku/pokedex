import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameAggregateFieldsModelBase } from "./PokemonV2VersionnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameAggregateFieldsModel */
export interface PokemonV2VersionnameAggregateFieldsModelType extends Instance<typeof PokemonV2VersionnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameAggregateFieldsModel */
export { selectFromPokemonV2VersionnameAggregateFields, pokemonV2VersionnameAggregateFieldsModelPrimitives, PokemonV2VersionnameAggregateFieldsModelSelector } from "./PokemonV2VersionnameAggregateFieldsModel.base"

/**
 * PokemonV2VersionnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_versionname"
 */
export const PokemonV2VersionnameAggregateFieldsModel = PokemonV2VersionnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
