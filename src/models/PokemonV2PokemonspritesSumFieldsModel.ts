import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesSumFieldsModelBase } from "./PokemonV2PokemonspritesSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesSumFieldsModel */
export interface PokemonV2PokemonspritesSumFieldsModelType extends Instance<typeof PokemonV2PokemonspritesSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesSumFieldsModel */
export { selectFromPokemonV2PokemonspritesSumFields, pokemonV2PokemonspritesSumFieldsModelPrimitives, PokemonV2PokemonspritesSumFieldsModelSelector } from "./PokemonV2PokemonspritesSumFieldsModel.base"

/**
 * PokemonV2PokemonspritesSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspritesSumFieldsModel = PokemonV2PokemonspritesSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
