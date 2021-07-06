import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformVarianceFieldsModelBase } from "./PokemonV2PokemonformVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformVarianceFieldsModel */
export interface PokemonV2PokemonformVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonformVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformVarianceFieldsModel */
export { selectFromPokemonV2PokemonformVarianceFields, pokemonV2PokemonformVarianceFieldsModelPrimitives, PokemonV2PokemonformVarianceFieldsModelSelector } from "./PokemonV2PokemonformVarianceFieldsModel.base"

/**
 * PokemonV2PokemonformVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonformVarianceFieldsModel = PokemonV2PokemonformVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
