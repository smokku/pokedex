import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeVarianceFieldsModelBase } from "./PokemonV2PokemontypeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeVarianceFieldsModel */
export interface PokemonV2PokemontypeVarianceFieldsModelType extends Instance<typeof PokemonV2PokemontypeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeVarianceFieldsModel */
export { selectFromPokemonV2PokemontypeVarianceFields, pokemonV2PokemontypeVarianceFieldsModelPrimitives, PokemonV2PokemontypeVarianceFieldsModelSelector } from "./PokemonV2PokemontypeVarianceFieldsModel.base"

/**
 * PokemonV2PokemontypeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemontypeVarianceFieldsModel = PokemonV2PokemontypeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
