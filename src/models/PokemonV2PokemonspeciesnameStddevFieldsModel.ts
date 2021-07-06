import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameStddevFieldsModelBase } from "./PokemonV2PokemonspeciesnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameStddevFieldsModel */
export interface PokemonV2PokemonspeciesnameStddevFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameStddevFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameStddevFields, pokemonV2PokemonspeciesnameStddevFieldsModelPrimitives, PokemonV2PokemonspeciesnameStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesnameStddevFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonspeciesnameStddevFieldsModel = PokemonV2PokemonspeciesnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
