import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatVarianceFieldsModelBase } from "./PokemonV2PokemonstatVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatVarianceFieldsModel */
export interface PokemonV2PokemonstatVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonstatVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatVarianceFieldsModel */
export { selectFromPokemonV2PokemonstatVarianceFields, pokemonV2PokemonstatVarianceFieldsModelPrimitives, PokemonV2PokemonstatVarianceFieldsModelSelector } from "./PokemonV2PokemonstatVarianceFieldsModel.base"

/**
 * PokemonV2PokemonstatVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonstatVarianceFieldsModel = PokemonV2PokemonstatVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
