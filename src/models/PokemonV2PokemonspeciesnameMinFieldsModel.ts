import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameMinFieldsModelBase } from "./PokemonV2PokemonspeciesnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameMinFieldsModel */
export interface PokemonV2PokemonspeciesnameMinFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameMinFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameMinFields, pokemonV2PokemonspeciesnameMinFieldsModelPrimitives, PokemonV2PokemonspeciesnameMinFieldsModelSelector } from "./PokemonV2PokemonspeciesnameMinFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspeciesnameMinFieldsModel = PokemonV2PokemonspeciesnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
