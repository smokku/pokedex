import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameMinFieldsModelBase } from "./PokemonV2PokemonformnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameMinFieldsModel */
export interface PokemonV2PokemonformnameMinFieldsModelType extends Instance<typeof PokemonV2PokemonformnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameMinFieldsModel */
export { selectFromPokemonV2PokemonformnameMinFields, pokemonV2PokemonformnameMinFieldsModelPrimitives, PokemonV2PokemonformnameMinFieldsModelSelector } from "./PokemonV2PokemonformnameMinFieldsModel.base"

/**
 * PokemonV2PokemonformnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformnameMinFieldsModel = PokemonV2PokemonformnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
