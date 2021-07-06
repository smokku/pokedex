import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameSumFieldsModelBase } from "./PokemonV2PokemonshapenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameSumFieldsModel */
export interface PokemonV2PokemonshapenameSumFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameSumFieldsModel */
export { selectFromPokemonV2PokemonshapenameSumFields, pokemonV2PokemonshapenameSumFieldsModelPrimitives, PokemonV2PokemonshapenameSumFieldsModelSelector } from "./PokemonV2PokemonshapenameSumFieldsModel.base"

/**
 * PokemonV2PokemonshapenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonshapenameSumFieldsModel = PokemonV2PokemonshapenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
