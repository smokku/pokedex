import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeMinFieldsModelBase } from "./PokemonV2PokemonshapeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeMinFieldsModel */
export interface PokemonV2PokemonshapeMinFieldsModelType extends Instance<typeof PokemonV2PokemonshapeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeMinFieldsModel */
export { selectFromPokemonV2PokemonshapeMinFields, pokemonV2PokemonshapeMinFieldsModelPrimitives, PokemonV2PokemonshapeMinFieldsModelSelector } from "./PokemonV2PokemonshapeMinFieldsModel.base"

/**
 * PokemonV2PokemonshapeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonshapeMinFieldsModel = PokemonV2PokemonshapeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
