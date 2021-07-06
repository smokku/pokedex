import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveSumFieldsModelBase } from "./PokemonV2PokemonmoveSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveSumFieldsModel */
export interface PokemonV2PokemonmoveSumFieldsModelType extends Instance<typeof PokemonV2PokemonmoveSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveSumFieldsModel */
export { selectFromPokemonV2PokemonmoveSumFields, pokemonV2PokemonmoveSumFieldsModelPrimitives, PokemonV2PokemonmoveSumFieldsModelSelector } from "./PokemonV2PokemonmoveSumFieldsModel.base"

/**
 * PokemonV2PokemonmoveSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonmoveSumFieldsModel = PokemonV2PokemonmoveSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
