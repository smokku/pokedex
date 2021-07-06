import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameStddevPopFieldsModelBase } from "./PokemonV2PokemonspeciesnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameStddevPopFieldsModel */
export interface PokemonV2PokemonspeciesnameStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameStddevPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameStddevPopFields, pokemonV2PokemonspeciesnameStddevPopFieldsModelPrimitives, PokemonV2PokemonspeciesnameStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesnameStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonspeciesnameStddevPopFieldsModel = PokemonV2PokemonspeciesnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
