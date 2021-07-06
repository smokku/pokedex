import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameVarianceFieldsModelBase } from "./PokemonV2PokemonspeciesnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameVarianceFieldsModel */
export interface PokemonV2PokemonspeciesnameVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameVarianceFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameVarianceFields, pokemonV2PokemonspeciesnameVarianceFieldsModelPrimitives, PokemonV2PokemonspeciesnameVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesnameVarianceFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonspeciesnameVarianceFieldsModel = PokemonV2PokemonspeciesnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
