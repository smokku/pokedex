import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameVarianceFieldsModelBase } from "./PokemonV2PokemoncolornameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameVarianceFieldsModel */
export interface PokemonV2PokemoncolornameVarianceFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameVarianceFieldsModel */
export { selectFromPokemonV2PokemoncolornameVarianceFields, pokemonV2PokemoncolornameVarianceFieldsModelPrimitives, PokemonV2PokemoncolornameVarianceFieldsModelSelector } from "./PokemonV2PokemoncolornameVarianceFieldsModel.base"

/**
 * PokemonV2PokemoncolornameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemoncolornameVarianceFieldsModel = PokemonV2PokemoncolornameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
