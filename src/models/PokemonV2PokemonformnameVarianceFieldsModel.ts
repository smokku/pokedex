import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameVarianceFieldsModelBase } from "./PokemonV2PokemonformnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameVarianceFieldsModel */
export interface PokemonV2PokemonformnameVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonformnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameVarianceFieldsModel */
export { selectFromPokemonV2PokemonformnameVarianceFields, pokemonV2PokemonformnameVarianceFieldsModelPrimitives, PokemonV2PokemonformnameVarianceFieldsModelSelector } from "./PokemonV2PokemonformnameVarianceFieldsModel.base"

/**
 * PokemonV2PokemonformnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonformnameVarianceFieldsModel = PokemonV2PokemonformnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
