import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodAggregateFields, pokemonV2VersiongroupmovelearnmethodAggregateFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_versiongroupmovelearnmethod"
 */
export const PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel = PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
