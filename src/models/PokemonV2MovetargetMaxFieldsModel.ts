import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetMaxFieldsModelBase } from "./PokemonV2MovetargetMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetMaxFieldsModel */
export interface PokemonV2MovetargetMaxFieldsModelType extends Instance<typeof PokemonV2MovetargetMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetMaxFieldsModel */
export { selectFromPokemonV2MovetargetMaxFields, pokemonV2MovetargetMaxFieldsModelPrimitives, PokemonV2MovetargetMaxFieldsModelSelector } from "./PokemonV2MovetargetMaxFieldsModel.base"

/**
 * PokemonV2MovetargetMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovetargetMaxFieldsModel = PokemonV2MovetargetMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
