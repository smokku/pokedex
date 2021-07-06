import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonVarianceFieldsModelBase } from "./PokemonV2PokemonVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonVarianceFieldsModel */
export interface PokemonV2PokemonVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonVarianceFieldsModel */
export { selectFromPokemonV2PokemonVarianceFields, pokemonV2PokemonVarianceFieldsModelPrimitives, PokemonV2PokemonVarianceFieldsModelSelector } from "./PokemonV2PokemonVarianceFieldsModel.base"

/**
 * PokemonV2PokemonVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonVarianceFieldsModel = PokemonV2PokemonVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
