import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameMinFieldsModelBase } from "./PokemonV2PokemoncolornameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameMinFieldsModel */
export interface PokemonV2PokemoncolornameMinFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameMinFieldsModel */
export { selectFromPokemonV2PokemoncolornameMinFields, pokemonV2PokemoncolornameMinFieldsModelPrimitives, PokemonV2PokemoncolornameMinFieldsModelSelector } from "./PokemonV2PokemoncolornameMinFieldsModel.base"

/**
 * PokemonV2PokemoncolornameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemoncolornameMinFieldsModel = PokemonV2PokemoncolornameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
